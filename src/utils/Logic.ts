export const BOARD_WIDTH = 9;
export const BOARD_HEIGHT = 9;
export const BOMB_COUNT = 10;

export function generateBombMap(width: number, height: number, bombCount: number, excludeIndex: number): boolean[] {
  const totalCells = width * height;

  const bombs: boolean[] = new Array(totalCells).fill(false);

  let placedBombs = 0;
  while (placedBombs < bombCount) {
    const randomIndex = Math.floor(Math.random() * totalCells);

    if (!bombs[randomIndex] && randomIndex !== excludeIndex) {
      bombs[randomIndex] = true;
      placedBombs++;
    }
  }
  return bombs
}