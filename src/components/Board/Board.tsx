'use client'

import { useState } from "react";
import styles from "./Board.module.css"
import { Cell } from "../Cell/Cell"
import { generateBombMap, getSurroundBombCount, BOARD_WIDTH, BOARD_HEIGHT, BOMB_COUNT } from "../../utils/Logic";
import { CellState } from "../../types";

export function Board() {
  const [cellStates, setCellStates] = useState<CellState[]>(Array(BOARD_WIDTH * BOARD_HEIGHT).fill(CellState.CLOSED))
  const [bombMap, setBombMap] = useState<boolean[]>([]);


  const openCell = (index: number, newCellStates: CellState[], currentBombMap: boolean[]) => {
    if (newCellStates[index] !== CellState.CLOSED) return;

    newCellStates[index] = CellState.OPEN;

    const bombCount = getSurroundBombCount(index, BOARD_WIDTH, BOARD_HEIGHT, currentBombMap);
    
    // 周囲に爆弾がない場合は、周囲のセルも自動的に開く
    if (bombCount === 0 && currentBombMap.length > 0) {
      const x = index % BOARD_WIDTH;
      const y = Math.floor(index / BOARD_WIDTH);

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;

          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < BOARD_WIDTH && ny >= 0 && ny < BOARD_HEIGHT) {
            const nIndex = ny * BOARD_WIDTH + nx;
            openCell(nIndex, newCellStates, currentBombMap);
          }
        }
      }
    }
  };

  const handleCellClick = (index: number) => {
    const currentStatus = cellStates[index];

    if (currentStatus !== CellState.CLOSED) return;

    let currentBombMap = bombMap;

    if (currentBombMap.length === 0) {
      currentBombMap = generateBombMap(BOARD_WIDTH, BOARD_HEIGHT, BOMB_COUNT, index);
      setBombMap(currentBombMap);
    }

    const newCellStates = [...cellStates];
    openCell(index, newCellStates, currentBombMap);
    setCellStates(newCellStates);
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

  return (
    <div className={styles.Board}>
      <div className={styles.CellBox}
        style={{
          gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`
        }}
      >
        {Array.from({ length: BOARD_WIDTH * BOARD_HEIGHT }, (_, index) => {
          const x = index % BOARD_WIDTH;
          const y = Math.floor(index / BOARD_WIDTH);
          const bombCount = getSurroundBombCount(index, BOARD_WIDTH, BOARD_HEIGHT, bombMap);
          const isBomb = bombMap[index];
          return (
            <Cell
              key={`${x}-${y}`}
              x={x}
              y={y}
              status={cellStates[index]}
              count={bombCount}
              isBomb={isBomb}
              onClick={() => handleCellClick(index)}
              onRightClick={(e) => handleRightClick(e, index)}
            />
          )
        })}
      </div>
    </div>
  )
}