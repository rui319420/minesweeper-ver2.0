'use client'

import { useState, useEffect } from "react";
import { Board } from "../components/Board/Board"
import { Cell } from "../components/Cell/Cell";


export default function Home() {
  return (
    
    <div className="container">
      <h1>マインスイーパーver2.0!</h1>
      <h2>マス（仮）</h2>
      <Cell></Cell>
      <h2>ボード（仮）</h2>
      <Board></Board>
    </div>
  );
}
