import styles from "./Cell.module.css"

type CellProps = {
  x: number;
  y: number;
  status: number; // 0:閉, 1:旗, 2:?, 3:開
  count: number;
  isBomb: boolean;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
};

export function Cell({x, y, status, count, isBomb, onClick, onRightClick}: CellProps) {
  
  const cellDisplay = () => {
    if (status === 1) return "旗";
    if (status === 2) return "❓";
    if (status === 3) return ``;
    return "";
  }

  const className = status === 3 ? styles.CellOpen : styles.Cell;
  
  let content = null;

  if (status === 3) {
    if (isBomb) {
      content = <div className={styles.Mine}></div>;
    } else if (count > 0) {
      const iconIndex = count - 1;
      const mineCountStyle = {
        backgroundPosition: `-${iconIndex * 15}px 0px`
      };
      content = <div className={styles.MineCount} style={mineCountStyle}></div>;
      };
    } else {
    const text = cellDisplay();
    if (text) {
      content = <div>{text}</div>;
    }
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