import styles from "./Cell.module.css"

type CellProps = {
  x: number;
  y: number;
  status: number; // 0:閉, 1:旗, 2:?, 3:開
  count: number
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
};

export function Cell({x, y, status, count, onClick, onRightClick}: CellProps) {
  
  const cellDisplay = () => {
    if (status === 1) return "旗";
    if (status === 2) return "❓";
    if (status === 3) return ``;
    return "";
  }

  const className = status === 3 ? styles.CellOpen : styles.Cell;
  
  let mineCountStyle = {}
  let showNumber = false;

if (status === 3 && count > 0) {
    showNumber = true;
    
    const iconIndex = count - 1; 
    mineCountStyle = {
      backgroundPosition: `-${iconIndex * 15}px 0px`
    };
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      {showNumber && (
        <div className={styles.MineCount} style={mineCountStyle}>
        </div>
      )}
      {!showNumber && cellDisplay() !== "" && (
        <div>{cellDisplay()}</div>
      )}
    </div>
  )
}