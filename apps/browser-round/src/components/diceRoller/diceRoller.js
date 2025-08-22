import { useState } from "react";
import "./diceRoller.scss";

const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start) + start);
};

function Dice({ diceValue }) {
  return (
    <div className="dice-body">
      {diceValue === 6 ||
      diceValue === 2 ||
      diceValue === 3 ||
      diceValue === 4 ||
      diceValue === 5 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      <div className="dice-dot-dummy"></div>
      {diceValue === 4 || diceValue === 5 || diceValue === 6 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      {diceValue === 6 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      {diceValue === 1 || diceValue === 3 || diceValue === 5 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      {diceValue === 6 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      {diceValue === 6 || diceValue === 4 || diceValue === 5 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
      <div className="dice-dot-dummy"></div>
      {diceValue === 6 ||
      diceValue === 2 ||
      diceValue === 3 ||
      diceValue === 4 ||
      diceValue === 5 ? (
        <div className="dice-dot"></div>
      ) : (
        <div className="dice-dot-dummy"></div>
      )}
    </div>
  );
}

function DiceList({ diceData }) {
  return (
    <div>
      {diceData?.map((diceValue) => {
        return <Dice diceValue={diceValue} />;
      })}
    </div>
  );
}

function DiceForm({ setNoOfDice, onRollClick }) {
  return (
    <div className="dice-form">
      <input type="number" onChange={(e) => setNoOfDice(e.target.value)} />
      <button onClick={onRollClick}>Roll</button>
    </div>
  );
}

export default function DiceRoller() {
  const [noOfDice, setNoOfDice] = useState(0);
  const [diceData, setDiceData] = useState([]);

  const onRollClick = () => {
    const randomValueSet = [];
    for (let i = 0; i < noOfDice; i++) {
      randomValueSet.push(getRandomNumber(1, 7));
    }
    setDiceData(randomValueSet);
  };
  return (
    <div className="dice-roller">
      <DiceForm setNoOfDice={setNoOfDice} onRollClick={onRollClick} />
      <DiceList diceData={diceData} />
    </div>
  );
}
