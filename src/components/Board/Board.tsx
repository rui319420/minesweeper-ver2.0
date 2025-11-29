import styles from "./Board.module.css"
import { Cell } from "../Cell/Cell"

export function Board() {
  const BOARD_WIDTH = 9;
  const BOARD_HEIGHT = 9;
  const cells = Array(BOARD_WIDTH * BOARD_HEIGHT).fill(0)

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