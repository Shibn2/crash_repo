import React, { useEffect, useMemo, useState } from "react";

import { players } from "./constants";
const REMOVE_LABEL = "Remove";
const SELECTED_LABEL = "Select";
const PLAYER_INIT_DATA = players?.reduce((acc, player, idx) => {
  const { age } = player;
  const id = `${idx}${age}`;
  acc[id] = {
    ...player,
    isSelected: false,
    id,
  };
  return acc;
}, {});

function PlayerTable({ name, playerList, onSelect, onRemove, isSelectedList }) {
  return (
    <div>
      <label>{name}</label>
      <table>
        <thead>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <label>Age</label>
            </td>
            <td>
              <label>Selected</label>
            </td>
          </tr>
        </thead>
        <tbody>
          {playerList?.map((player) => {
            return (
              <tr>
                <td>
                  <label>{player.name}</label>
                </td>
                <td>
                  <label>{player.role}</label>
                </td>
                <td>
                  {player.isSelected && isSelectedList ? (
                    <button onClick={() => onRemove(player.id)}>
                      {REMOVE_LABEL}
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelect(player.id)}
                      disabled={player.isSelected}
                    >
                      {SELECTED_LABEL}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PlayerAuction() {
  const [playerList, setPlayerList] = useState(PLAYER_INIT_DATA);

  const onSelect = (id) => {
    const updateList = (prev) => {
      const copy = { ...prev };
      copy[id] = {
        ...copy[id],
        isSelected: true,
      };
      return copy;
    };
    setPlayerList(updateList);
  };

  const onRemove = (id) => {
    const updateList = (prev) => {
      const copy = { ...prev };
      copy[id] = {
        ...copy[id],
        isSelected: false,
      };
      return copy;
    };
    setPlayerList(updateList);
  };

  const selectedBatsManCount = useMemo(() => {
    return Object.values(playerList).filter(
      (player) => player.isSelected && player.role.includes("batsman")
    ).length;
  }, [playerList]);

  useEffect(() => {
    if (selectedBatsManCount > 4) {
      alert("Cannot pick more than 4 batsman!!!");
    }
  }, [selectedBatsManCount]);

  return (
    <div style={{ display: "flex" }}>
      <PlayerTable
        name={"Available players"}
        playerList={Object.values(playerList)}
        onSelect={onSelect}
        onRemove={onRemove}
      />
      <PlayerTable
        name={"Selected players"}
        playerList={Object.values(playerList).filter(
          (player) => player.isSelected
        )}
        onSelect={onSelect}
        onRemove={onRemove}
        isSelectedList
      />
    </div>
  );
}

export default PlayerAuction;
