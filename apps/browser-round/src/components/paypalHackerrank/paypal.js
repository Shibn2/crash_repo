import React, { useState } from "react";
import { players as playerList, players } from "./constants";
import "./paypal.scss";

const INIT_PLAYERS = playerList.reduce((acc, player, idx) => {
  return {
    ...acc,
    [`id-${idx}`]: {
      ...player,
      id: `id-${idx}`,
    },
  };
}, {});
function Paypal() {
  const [players, setPlayers] = useState(INIT_PLAYERS);
  const [selectedPlayers, setSelectedPlayers] = useState({});

  const handleOnSelectClick = (player) => {
    let selectedPlayer;
    const id = player.id;
    setPlayers((prev) => {
      const updated = { ...prev[id] };
      updated.selected = true;
      selectedPlayer = updated;
      return {
        ...prev,
        [id]: updated,
      };
    });
    setSelectedPlayers((prev) => {
      console.log("prev", prev, "selectedPlayer", selectedPlayer);
      return {
        ...prev,
        [selectedPlayer.id]: selectedPlayer,
      };
    });
  };

  const removeSelectedItem = (id) => {
    setPlayers((prev) => {
      const updated = { ...prev };
      updated[id] = {
        ...updated[id],
        selected: false,
      };
      return updated;
    });
    setSelectedPlayers((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };
  return (
    <div className="paypal-test">
      <div className="player-details-modal"></div>
      <div className="player-lists">
        <div className="available-players">
          <div>
            <label>Available players</label>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(players)?.map((player) => {
                return (
                  <tr>
                    <td>{player.name}</td>
                    <td>{player.age}</td>
                    <td>
                      <button
                        style={{ backgroundColor: "green" }}
                        disabled={player.selected}
                        onClick={() => handleOnSelectClick(player)}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="selected-players">
          <div>
            <label>Selected players</label>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(selectedPlayers)?.map((player) => {
                return (
                  <tr>
                    <td>{player.name}</td>
                    <td>{player.age}</td>
                    <td>
                      <button
                        style={{ backgroundColor: "red" }}
                        disabled={!player.selected}
                        onClick={() => removeSelectedItem(player.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Paypal;

// import React from 'react';
// import { useState, useEffect } from 'react'

// function withClickTracker (WrappedComponent){
//   const [clickCount, setClickCount] = useState(0);

//   useEffect(() => {
//       console.log('Click!!', clickCount);
//   }, [clickCount])

//   return <button onClick={() => setClickCount(prev => prev+1)}><WrappedComponent/></button>
// }

// function CustomeButton() {
//   return <button>Click me!!!</button>
// }

// function CustomeForm(){
//   const [ formData, setFormData] = useState({});

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       if(formData.Password.length < 8){
//         console.log('Invalid password')
//       }
//   }
//   return (<form>
//     <label>Name: </label>
//     <input onChange={(e)=> {
//     setFormData(prev => {
//       return {
//         ...prev,
//         username: e.target.value,
//       }
//     })}
//     }
//     />
//     <label>Password: </label>
//     <input onChange={(e)=> {
//     setFormData(prev => {
//       return {
//         ...prev,
//         Password: e.target.value,
//       }
//     })}
//     }/>
//     <button onClick={handleSubmit}>Submit</button>
//   </form>)
// }

// function App(){
//   return <div>
//     <CustomeForm/>
//   </div>
// }

// export default App
