import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  const weapons = ["paper", "scissors", "rock"];
  const victory = "Congratulations You Won";
  const lost = "i am sorry you lost";
  const tie = "its Tie Play Again";

  const [choice, setChoice] = useState({
    playerOne: "",
    playerTwo: "",
    winner: "",
  });

  const chooseWeapon = (weapon) => {
    const choiceP1 = weapon;
    const choiceP2 = weapons[Math.floor(Math.random() * 3)];
    const winner = getWinner(choiceP1, choiceP2);
    setChoice({
      playerOne: choiceP1,
      playerTwo: choiceP2,
      winner,
    });
  };

  const getWinner = (player1, player2) => {
    if (player1 === "paper") {
      if (player2 === "scissors") {
        // return "player two won";
        return lost;
      } else if (player2 === "rock") {
        return victory;
      } else if (player1 === player2) {
        return tie;
      }
    } else if (player1 === "rock") {
      if (player2 === "paper") {
        return lost;
      } else if (player2 === "rock") {
        return tie;
      } else if (player2 === "scissors") {
        return victory;
      }
    } else if (player1 === "scissors") {
      if (player2 === "rock") {
        return lost;
      } else if (player2 === "paper") {
        return victory;
      } else if (player2 === "scissors") {
        return tie;
      }
    }
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors </h1>
      <h2>Player one:{choice.playerOne}</h2>
      <h2>Player two:{choice.playerTwo}</h2>
      <h1>{choice.winner}</h1>

      <div className="app__button">
        <img
          className="app__imgPaper"
          onClick={() => chooseWeapon("paper")}
          src="https://static.thenounproject.com/png/477912-200.png"
        />

        <img
          className="app__imgPaper"
          src="https://static.thenounproject.com/png/477914-200.png"
          onClick={() => chooseWeapon("rock")}
        />

        <img
          className="app__imgPaper"
          src="https://static.thenounproject.com/png/477919-200.png"
          onClick={() => chooseWeapon("scissors")}
        />
      </div>

      <div className="app__reset">
        <button>reset</button>
        {/* <img
          className="lll"
          src="https://static.thenounproject.com/png/477912-200.png"
        /> */}
      </div>
    </div>
  );
}

export default App;
