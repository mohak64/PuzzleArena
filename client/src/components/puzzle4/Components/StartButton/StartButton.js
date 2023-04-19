import { Box, Button,Slide } from "@mui/material";
import { useContext } from "react"
import DataContext from "../../GameContext";
function StartButton() {

  const { StartStage, gameStarted } = useContext(DataContext)
  return (

    <Box container sx={{ display: "flex", justifyContent: "center", p: "5px", mr: "100px", mt: "10px", ml: "100px", height: "110px", mb: "5px" }} >

      <Slide direction="right" in={!gameStarted} mountOnEnter unmountOnExit>
        <div>
          <Button onClick={StartStage} sx={{ backgroundColor: "orangered" ,borderRadius: "15px", border: "thin solid", width: "150px" }} >
           <h3> START STAGE</h3>
          </Button>
        </div>
      </Slide>

    </Box>
  );
}
export default StartButton;