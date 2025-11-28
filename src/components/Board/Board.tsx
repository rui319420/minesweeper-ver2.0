import styles from "./Board.module.css"
import { Cell } from "../Cell/Cell"

export function Board() {

  const cells = Array(81).fill(0)

  return (
    <div className={styles.Board}>
      {cells.map((_, index) => (
        <Cell key={index}></Cell>
      ))}
    </div>
  )
}