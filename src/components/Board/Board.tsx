'use client'

import { useState } from "react";
import styles from "./Board.module.css"
import { Cell } from "../Cell/Cell"
import { generateBombMap, BOARD_WIDTH, BOARD_HEIGHT, BOMB_COUNT } from "@/src/utils/Logic";

enum CellState {
  CLOSED = 0,
  FLAG = 1,
  QUESTION = 2,
  OPEN = 3
}

export function Board() {
  const [cellStates, setCellStates] = useState<number[]>(Array(BOARD_WIDTH * BOARD_HEIGHT).fill(0))
  const [bombMap, setBombMap] = useState<boolean[]>([]);


  const handleCellClick = (index: number) => {
    const currentStatus = cellStates[index];
    if (currentStatus === CellState.CLOSED) {
      const newCellStates = [...cellStates];
      newCellStates[index] = CellState.OPEN;
      setCellStates(newCellStates);
    }
  };

  const handleRightClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const currentStatus = cellStates[index];

    if (currentStatus === CellState.OPEN) return;

    const newCellStates = [...cellStates];

    if (currentStatus === CellState.CLOSED) {
      newCellStates[index] = CellState.FLAG;
    } else if (currentStatus === CellState.FLAG) {
      newCellStates[index] = CellState.QUESTION 
    } else if (currentStatus === CellState.QUESTION) {
      newCellStates[index] = CellState.CLOSED;
    }
    setCellStates(newCellStates);
  };

  const cells = Array(BOARD_WIDTH * BOARD_HEIGHT).fill(0);

  return (
    <div className={styles.Board}>
      <div className={styles.CellBox}
        style={{
          gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`
        }}
      >
        {cells.map((_, index) => {
          const x = index % BOARD_WIDTH;
          const y = Math.floor(index / BOARD_WIDTH);
          return (
            <Cell
              key={`${x}-${y}`}
              x={x}
              y={y}
              status={cellStates[index]}
              onClick={() => handleCellClick(index)}
              onRightClick={(e) => handleRightClick(e, index)}
            />
          )
        })}
      </div>
    </div>
  )
}