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

export function getSurroundBombCount(index: number, width: number, height: number, bombMap: boolean[]): number {
  if (bombMap.length === 0) return 0;

  let count = 0
  const x = index % width;
  const y = Math.floor(index / width);

  for (let dy = -1; dy <= 1; dy++){
    for (let dx = -1; dx <= 1; dx++){
      if (dx === 0 && dy === 0) continue;

      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (bombMap[nIndex]) {
          count++;
        }
      }
    }
  }
  return count;
}