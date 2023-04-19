import { Box, Typography,Slide } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useContext } from "react";
import DataContext from "../../GameContext";
import ProgressTimer from "./ProgressTimer";




function ScoreBoard() {
    const { health, gameLevel,previewSeconds, showPreviewCounter, selectionSeconds } = useContext(DataContext)


    return (

        <Box container sx={{ display: "flex", flexDirection: 'row', justifyContent: "center", height: "130px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", pt: "5px", border: "thin solid rgb(23, 105, 170)", boxShadow: "0 0 10px rgba(23, 105, 170,0.7)", borderRadius: "15px", width: "150px", height: "50px", mt: "25px", }}>
                <Typography variant="h4" sx={{ color: "rgb(23, 105, 170)" }}>Level:{gameLevel}</Typography>
            </Box>

            <Box container sx={{ display: "flex", justifyContent: "center", alignContent: "center", borderRadius: "15px", width: "350px", pt:"5px" ,height: "100px", mr: "20px", ml: "20px" }}>
              
            <Slide direction="up" in={showPreviewCounter} mountOnEnter unmountOnExit>
               <div> <ProgressTimer  value={(previewSeconds /(5+(3*gameLevel) ) * 100)}  time={previewSeconds} title={"PREVIEW TIME"}  customcolor={"rgb(23, 105, 170)"} /> </div>
                </Slide>

                <Slide direction="down" in={!showPreviewCounter} mountOnEnter unmountOnExit>
               <div> <ProgressTimer  value={(selectionSeconds / (10+(6*gameLevel)) * 100)}  time={selectionSeconds} title={" SELECTION TIME"} customcolor={"orangered"} /> </div>
                </Slide>
            </Box>

            <Box sx={{ display: "flex", border: "thin solid rgb(23, 105, 170)", boxShadow: "0 0 10px rgba(23, 105, 170,0.7)", justifyContent: "center", borderRadius: "15px", width: "150px", height: "50px", mt: "25px" }}>

                {
                    [...Array(health)].map((_, index) => (
                        <FavoriteIcon key={index} sx={{ fontSize: 40, mt: 1, color: "rgb(23, 105, 170)" }} />))
                }

                {
                    [...Array(3 - health)].map((_, index) => (
                        <FavoriteBorderOutlinedIcon key={index} sx={{ fontSize: 40, mt: 1, color: "rgb(23, 105, 170)" }} />))
                }
            </Box>

        </Box>

    );
}

export default ScoreBoard;