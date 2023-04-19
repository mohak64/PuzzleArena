
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { useContext } from 'react';
import DataContext from '../../GameContext';
import { Button } from '@mui/material';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-tap-highlight-color: transparent;
`;





function InstructionsModal() {

    const { HideInstructions, showInstructions, } = useContext(DataContext)
    return (
        <div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={showInstructions}
                BackdropComponent={Backdrop}
            >
                <Box sx={{
                    width: "30vw",
                    bgcolor: 'lightblue',
                    border: '2px solid #000',
                    p: 2,
                    px: 4,
                    pb: 3,
                    borderRadius: "15px"
                }}>
                    <h1> <u>How to play the game</u> </h1>
                    <ul>
                        <li>The aim of the game is to remember as many orange box placements as possible in each level of the game </li>

                        <li>You have to press the start button to start playing each stage of the game</li>

                        <li>Each level begins with the player being given the time to preview the orange box placements.</li>

                        <li>hen the player is given time to choose the correct placements during the select time</li>T

                        <li>Should the play remember all the placement they advance to the next level, if they run out of time they lose the game</li>

                        <li>players are given three chances, if they choose the incorrect placement for more than 3 times they loose game</li>

                        <li>good luck!!!</li>
                    </ul>
                    <Button size={"Large"} onClick={HideInstructions} sx={{ backgroundColor: "darkblue" }}>Ok</Button>
                </Box>
            </StyledModal>
        </div>
    );
}

export default InstructionsModal;