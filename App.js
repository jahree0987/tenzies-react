import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Rolls from "./Rolls";
import Timer from "./Timer";
import Stats from "./Stats";
import Color from "./Color";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [highScore, setHighScore] = React.useState(
    JSON.parse(localStorage.getItem("score2"))
  );
  const [color, setColor] = React.useState(["blue", "red"]);
  const currentScore = 0; 
  React.useEffect(() => {
    if (isGameStarted) {
      let intervalId = setInterval(displayTimer, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isGameStarted]);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    
    if (allHeld && allSameValue) {
      setTenzies(true);
      setIsGameStarted(false);
      
    
      if (currentScore < highScore) {
        console.log("You beat the high score");
        localStorage.setItem("score2", JSON.stringify(currentScore));
      }
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function displayTimer() {
    setTimer((prevState) => prevState + 1);
  }

  function rollDice() {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setRolls(-1);
    }

    if (!tenzies) {
      setRolls((prevState) => prevState + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(-1);
      setTimer(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { 
            value: die.value,
            isHeld: false,
            id: nanoid(), isHeld: !die.isHeld } : die;
        
      })
    );
  }

  function newGame() {
    setTenzies((prevState) => !prevState);
    setRolls(-1);
    setTimer(0);
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      color={color[0]}
      background={color[1]}
    />
  ));

  function handleColor(color, background) {
    setColor([color, background]);
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="color-container">
        <Color
          color="blue"
          background="red"
          handleColor={() => handleColor("blue", "red")}
        />
        <Color
          color="violet"
          background="cyan"
          handleColor={() => handleColor("violet", "cyan")}
        />
        <Color
          color="orange"
          background="green"
          handleColor={() => handleColor("orange", "green")}
        />
        <Color
          color="black"
          background="white"
          handleColor={() => handleColor("black", "white")}
        />
      </div>
      <div className="dice-container">{isGameStarted && diceElements}</div>
      {tenzies && <h3>You won</h3>}
      {tenzies && <Rolls rolls={rolls} />}
      {tenzies && <Timer timer={timer} />}

      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : isGameStarted === false ? "Start game" : "Roll"}
      </button>
    </main>
  );
}
