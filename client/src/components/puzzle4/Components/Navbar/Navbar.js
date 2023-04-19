import {useContext} from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material"
import BrainIcon from "../Asssets/BrainIcon";
import { LinkedIn, GitHub } from "@mui/icons-material";
import DataContext from "../../GameContext";

function Navbar() {

  const {DisplayInstructions} = useContext(DataContext)

  return (
    <Box container sx={{ display: "flex", height: "80px", boxShadow:"0 2px 10px rgba(23, 105, 170,0.7)" , padding: "10px",borderBottom: "thin solid #1769aa" }} >
      <Box sx={{ height: "60px", width: "80px", borderRadius: "15%", alignContent: "center" }}>
        <BrainIcon height={60} width={70}  fill ={"rgb(23, 105, 170)"} />
      </Box>

      <Typography variant="h5" component="div" flexGrow={1} sx={{ pt: "15px" , color:"rgb(23, 105, 170)"}}>
        MEMORY TESTING GAME
      </Typography>
      <Tooltip title="See instructions on how to play the game">
        <Button onClick={DisplayInstructions} variant="outlined" sx ={{mr:"15px"}}>
          How to play the game ?
        </Button>
      </Tooltip>
      <Tooltip title="View LinkedIn profile">
        <Button onClick={()=>{ window.open("https://www.linkedin.com/in/mohakbansal6401/", "_blank")}} variant="outlined">
          <LinkedIn sx={{ fontSize: 40,color:"rgb(23, 105, 170)" }} />
        </Button>
      </Tooltip>
      <Tooltip title="Github repo">
        <Button onClick={()=>{ window.open("https://github.com/Jaihanuman64", "_blank")}}  variant="outlined"  sx={{ ml: "10px", borderRadius: "5%", borderStyle: "solid" ,}}>
          <GitHub sx={{ fontSize: 40 ,color:"rgb(23, 105, 170)"}} />
        </Button>
      </Tooltip>
    </Box>

  );

}

export default Navbar;