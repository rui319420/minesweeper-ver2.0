import styles from "./Cell.module.css"

type CellProps = {
  x: number;
  y: number;
};

export function Cell({x, y}: CellProps) {
  

  return (
    <div className={styles.Cell}>
      ({x},{y})
    </div>
  )
}