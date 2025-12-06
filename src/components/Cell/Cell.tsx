import styles from "./Cell.module.css"
import { CellState } from "../../types";

type CellProps = {
  x: number;
  y: number;
  status: CellState;
  count: number;
  isBomb: boolean;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
};

export function Cell({x, y, status, count, isBomb, onClick, onRightClick}: CellProps) {
  const className = status === CellState.OPEN ? styles.CellOpen : styles.Cell;
  
  let content = null;

  if (status === CellState.OPEN) {
    if (isBomb) {
      content = <div className={styles.Mine}></div>;
    } else if (count > 0) {
      const iconIndex = count - 1;
      const mineCountStyle = {
        backgroundPosition: `-${iconIndex * 20}px 0px`
      };
      content = <div className={styles.MineCount} style={mineCountStyle}></div>;
    }
  } else if (status === CellState.FLAG) {
    content = <div>旗</div>;
  } else if (status === CellState.QUESTION) {
    content = <div>❓</div>;
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
    {content}
    </div>
  )
}