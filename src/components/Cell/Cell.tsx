import styles from "./Cell.module.css"

type CellProps = {
  x: number;
  y: number;
  status: number; // 0:閉, 1:旗, 2:?, 3:開
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
};

export function Cell({x, y, status, onClick, onRightClick}: CellProps) {
  
  const cellDisplay = () => {
    if (status === 1) return "旗";
    if (status === 2) return "❓";
    if (status === 3) return ``;
    return "";
  }

  const className = status === 3 ? styles.CellOpen : styles.Cell;
  
  let mineCount = ""
  if (className === styles.CellOpen) {
    mineCount = styles.MineCount 
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <div className={mineCount}>
        {cellDisplay()}
      </div>
    </div>
  )
}