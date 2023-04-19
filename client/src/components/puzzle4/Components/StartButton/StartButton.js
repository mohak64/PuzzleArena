import { Box, Button,Slide } from "@mui/material";
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../GameContext";
function StartButton() {

  const { StartStage, gameStarted } = useContext(DataContext)
  return (
    <>

    <Box container sx={{ display: "flex", justifyContent: "center", p: "5px", mr: "100px", mt: "10px", ml: "100px", height: "110px", mb: "5px" }} >

      <Slide direction="right" in={!gameStarted} mountOnEnter unmountOnExit>
        <div>
          <Button onClick={StartStage} sx={{ backgroundColor: "orangered" ,borderRadius: "15px", border: "thin solid", width: "150px" }} >
           <h3> START STAGE</h3>
          </Button>
        </div>
      </Slide>
      

    </Box>
    <div className="w-max mx-auto  flex">
    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <Link to="/Puzzle4clue">Clue & Guide</Link>{" "}
        </button>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <Link to="/contestpage">Puzzle Page</Link>{" "}
        </button>
        </div>
        </>
  );
}
export default StartButton;