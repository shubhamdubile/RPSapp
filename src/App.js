import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

const weapons = ["Rock", "Paper", "Scissor"];

function App() {
  const [winner, setWinner] = useState();
  const [weapon, setWeapon] = useState();
  const [computer, setComputer] = useState();
  const [user, setUser] = useState(0);
  const [bot, setBot] = useState(0);
  const [tie, setTie] = useState("Its Tie Play Again");
  const [you, setYou] = useState("Congratulation You Won");
  const [lost, setLost] = useState("Sorry you Lost Better Luck Next Time");
  const [wrong, setWrong] = useState("Please select Your Choice First");

  const start = (event) => {
    event.preventDefault();

    setComputer(weapons[Math.floor(Math.random() * weapons.length)]);

    if (weapon === null) {
      setWinner(wrong);
      setComputer(null);
    } else if (weapon === computer) {
      setWinner(tie);
    } else if (
      (weapon === "Rock" && computer === "Scissor") ||
      (weapon === "Scissor" && computer === "Paper") ||
      (weapon === "Paper" && computer === "Rock")
    ) {
      setWinner(you);
      setUser(user + 1);
    } else {
      setWinner(lost);
      setBot(bot + 1);
    }
  };
  const restart = (event) => {
    event.preventDefault();
    setWinner(null);
    setWeapon(null);
    setComputer(null);
    setBot(0);
    setUser(0);
  };

  return (
    <div className="app">
      <div className="app__body">
        <div>
          <h1>Let's Play Rock Paper Scissor</h1>
        </div>
        <div className="app__score">
          <table className="app__bordertable">
            <tr>
              <th>User</th>
              <th>Computer</th>
            </tr>
            <tr>
              <td>{user}</td>
              <td>{bot}</td>
            </tr>
          </table>
        </div>
        <div className="app__rpsbutton">
          <Button
            variant="outlined"
            size="large"
            onClick={() => setWeapon("Rock")}
          >
            Rock
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setWeapon("Paper")}
          >
            Paper
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setWeapon("Scissor")}
          >
            Scissor
          </Button>
        </div>
        <div className="app__score">
          <table className="app__bordertable">
            <tr>
              <th>Your Choice</th>
              <th>Computer Choice</th>
            </tr>
            <tr>
              <td>{weapon}</td>
              <td>{computer}</td>

              {/* <td>shubham</td>
              <td>shubham</td> */}
            </tr>
          </table>
        </div>
        <div className="app__score">
          <h1>{winner}</h1>
        </div>
        <div className="app__score">
          <div>
            <Button variant="outlined" size="large" onClick={start}>
              Play
            </Button>
            <Button variant="outlined" size="large" onClick={restart}>
              Restart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
