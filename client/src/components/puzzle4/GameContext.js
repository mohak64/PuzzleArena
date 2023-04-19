
import { createContext, useState, useRef, useEffect } from "react";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

  const [gameLevel, SetGameLeveL] = useState(1)
  const [health, setHealth] = useState(3);

  const Achivement = useRef(0);


  const ReduceHealth = () => {
    setHealth(health => health - 1)
    if (health === 1) {
      SetMessage(Message => Message = ".You have used all your chances")
      setOpen(open => open = true)
      ResetGame();

    }
  }

  const [previewSeconds, setSeconds] = useState(5 + (3 * gameLevel))
  const [selectionSeconds, SetSelecionSeconds] = useState(10 + (6 * gameLevel))
  const [gameStarted, SetGameStarted] = useState(false)
  const [gameOver, SetGameOver] = useState(false)
  const [Message, SetMessage] = useState("")

  const interval = useRef(null)

  const slecetiontTimeInterval = useRef(null)
  const disableGameButtons = useRef(false)

  const [showInstructions,setShowIstructions] = useState(false)

  const HideInstructions =() =>{
    setShowIstructions(false)
  }

  const DisplayInstructions = () => {

    setShowIstructions(true)
  }
  

  const [resetUpdate, setResetUpdate] = useState(false)
  const [open, setOpen] = useState(false);

  const StartStage = () => {
    disableGameButtons.current = false
    buttonStates.current = [...Array(4 * (gameLevel) * 2)].map((value) => (value = true))
    setSeconds(previewSeconds => previewSeconds = 5 + (3 * gameLevel))
    setShowPreviewCounter(showPreviewCounter => showPreviewCounter = true)
    SetSelecionSeconds(selectioSeconds => selectioSeconds = (10 + (6 * gameLevel)))
    SetGameStarted(gameStarted => gameStarted = true)
    StartPreviewCounter();
    Achivement.current=gameLevel


  }


  useEffect(() => {

    
    if (previewSeconds === 0) stopCounter() }, [previewSeconds])

  useEffect(() => {
    if (selectionSeconds === 0) {
      SetMessage(Message => Message = ".You ran out of time");
      setOpen(open => open = true)
      stopSelectiontime();
    }
  }, [selectionSeconds])



  const StartPreviewCounter = () => interval.current = setInterval(() => {
    setSeconds(previewSeconds => previewSeconds -= 1)
  }, 1000)

  const StartSelecetionCounter = () => slecetiontTimeInterval.current = setInterval(() => {
    SetSelecionSeconds(selectionSeconds => selectionSeconds -= 1)
  }, 1000)

  const stopSelectiontime = () => {

    ResetGame();
  }

  const stopCounter = () => {
    clearInterval(interval.current)
    setSeconds(previewSeconds => previewSeconds = 0)
    buttonStates.current = [...Array(4 * (gameLevel) * 2)].map((value) => (value = false))
    SetClicked(Clicked => !Clicked)
    setShowPreviewCounter(showPreviewCounter => showPreviewCounter = false)
    StartSelecetionCounter();
  }

  const UpgradeLevel = () => {
    SetGameLeveL(gameLevel => gameLevel += 1)
    clearInterval(slecetiontTimeInterval.current)
    SetClicked(Clicked => !Clicked)
    SetGameStarted(gameStarted => gameStarted = false)
  }

  const ResetGame = () => {
    setHealth(health => health = 3)
    SetGameLeveL(gameLevel => gameLevel = 1)
    setResetUpdate(resetUpdate => !resetUpdate)
    clearInterval(slecetiontTimeInterval.current)
    SetGameStarted(gameStarted => gameStarted = false)
    SetGameOver(gameOver => gameOver = true)
    
  }
  const CloseModal = () => {
    setOpen(open => open = false)
  }

  const correctCards = useRef(0);
  const gameMap = useRef([])
  const buttonStates = useRef([])
  const [Clicked, SetClicked] = useState(false)
  const [showPreviewCounter, setShowPreviewCounter] = useState(true)


  const RevealHiddenColors = (Index) => {

    SetClicked(Clicked => !Clicked)
    buttonStates.current[Index] = true
    if (gameMap.current[Index] === "#4d4d00") {
      ReduceHealth();
    }
    else {
      correctCards.current -= 1
      if (correctCards.current === 0) {
        UpgradeLevel()
      }
    }

  }


  useEffect(() => {
    disableGameButtons.current = true
    gameMap.current = [...Array(4 * (gameLevel) * 2)].map((value) => (value = ["#4d4d00", "#993d00"][(Math.random() >= 0.5) ? 1 : 0]));
    correctCards.current = gameMap.current.filter((value) => value === "#993d00").length
    buttonStates.current = [...Array(4 * (gameLevel) * 2)].map((value) => (value = false))
    SetClicked(Clicked => !Clicked)

  }, [gameLevel, resetUpdate]);
  return (
    <DataContext.Provider value={{HideInstructions,showInstructions,DisplayInstructions,disableGameButtons,gameOver, Clicked,health, Message, Achivement, open, CloseModal, gameStarted, setHealth, ReduceHealth, gameLevel, UpgradeLevel, ResetGame, previewSeconds, StartStage, buttonStates, RevealHiddenColors, gameMap, showPreviewCounter, selectionSeconds }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;