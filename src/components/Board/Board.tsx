'use client'

import { useState } from "react";
import styles from "./Board.module.css"
import { Cell } from "../Cell/Cell"

enum CellState {
  CLOSED = 0,
  FLAG = 1,
  QUESTION = 2,
  OPEN = 3
}

export function Board() {
  const BOARD_WIDTH = 9;
  const BOARD_HEIGHT = 9;
  const [cellStates, setCellStates] = useState<number[]>(Array(BOARD_WIDTH * BOARD_HEIGHT).fill(0))

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
      newCellStates[index] = CellState.CLOSED; // 2 -> 0
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