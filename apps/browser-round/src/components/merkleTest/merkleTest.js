import React, { createContext, useContext, useMemo, useReducer } from "react";
import { players } from "./constants";

const playerList = players?.map((player, idx) => {
  player.id = idx;
  return player;
});

const PlayerContext = createContext();
const DispatchContext = createContext();

function PlayerItem({ id, name, isSelect }) {
  const dispatch = useContext(DispatchContext);
  return (
    <li key={id}>
      <div>
        <label>{name}</label>
        <button
          onClick={() =>
            dispatch({
              type: isSelect ? "REMOVE_PLAYER" : "SELECT_PLAYER",
              playerKey: id,
            })
          }
        >
          {isSelect ? "Remove" : "Select"}
        </button>
      </div>
    </li>
  );
}

function PlayerList({ playerList = [] }) {
  return (
    <ul>
      {playerList?.map((player) => {
        const { id, name, isSelect } = player;
        return <PlayerItem id={id} name={name} isSelect={isSelect} />;
      })}
    </ul>
  );
}

function PlayerBoard() {
  const playerData = useContext(PlayerContext);
  console.log("playerData", playerData);
  const selectedPlayers = useMemo(
    () => playerData?.filter((player) => player.isSelect),
    [playerData]
  );
  return (
    <div>
      <div>
        <h3>Players</h3>
        <PlayerList playerList={playerData} />
      </div>
      <div>
        <h3>Selected players</h3>
        <PlayerList playerList={selectedPlayers} />
      </div>
    </div>
  );
}

const INIT_STATE = playerList;

const reducer = (state = INIT_STATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SELECT_PLAYER":
      const updatedState = state.map((player) => {
        if (action.playerKey === player.id) {
          player.isSelect = true;
          return player;
        }
        return player;
      });
      return updatedState;
    case "REMOVE_PLAYER":
      const updatedState2 = state.map((player) => {
        if (action.playerKey === player.id) {
          player.isSelect = false;
          return player;
        }
        return player;
      });
      return updatedState2;
    default:
      return state;
  }
};

function MerkleTest() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const updatedState = useMemo(() => state, [state]);

  return (
    <PlayerContext.Provider value={updatedState}>
      <DispatchContext.Provider value={dispatch}>
        <PlayerBoard />
      </DispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default function MerkleTestUtil() {
  return <MerkleTest />;
}
