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
  const [cellStatus, setCellStatus] = useState<number[]>(Array(BOARD_WIDTH * BOARD_HEIGHT).fill(0))



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
            <Cell key={`${x}-${y}`} x={x} y={y} />
          )
        })}
      </div>
    </div>
  )
}