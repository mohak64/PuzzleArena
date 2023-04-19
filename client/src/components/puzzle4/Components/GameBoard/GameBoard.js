
import { Box, Button ,Grow } from "@mui/material";
import { useContext} from "react";
import DataContext from "../../GameContext";



function GameBoard() {
  const { buttonStates,gameMap, RevealHiddenColors, gameLevel,disableGameButtons } = useContext(DataContext);

  return (

    <Box container >

      <Box container sx={{ display: "grid", gap: "10px", p: "5px", gridTemplateRows: "repeat(" + `${gameLevel * 2}` + ",1fr)", gridTemplateColumns: "repeat(4,1fr)", mr: "100px", mt: "10px", ml: "100px", height: "350px", mb: "10px" }} >

        {
          gameMap.current.map((_, index) =>
          <Grow in ={true} key={index} style={{ transformOrigin: '0 0 0' }}
          {...( { timeout: 1000 })}>
            <Button onClick={() => { RevealHiddenColors(index) }} disabled={disableGameButtons.current?true:buttonStates.current[index] } key={index} sx={{ backgroundColor: (!buttonStates.current[index] ? "rgb(23, 105, 170)" : `${gameMap.current[index]}`), borderRadius: "10px", border: "thin solid" }} >
            </Button>
            </Grow>
            )
        }

      </Box>

    </Box>
  );
}

export default GameBoard;