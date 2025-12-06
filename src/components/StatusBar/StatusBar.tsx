import styles from "./StatusBar.module.css"

export function StatusBar() {

  return (
    <div className={styles.StatusBar}>
      <div className={styles.mineCounter}>
        <div className={styles.hundredsPlace}></div>
        <div className={styles.tensPlace}></div>
        <div className={styles.onesPlace}></div>
      </div>
      <div className={styles.faceButtonShadow}>
        <div className={styles.face}></div>
      </div>
      <div className={styles.timer}>uuu</div>
    </div>
  )
}