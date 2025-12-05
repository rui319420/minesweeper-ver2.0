'use client'

import { useState, useEffect } from "react";
import { Board } from "../components/Board/Board"
import { Cell } from "../components/Cell/Cell";
import { StatusBar } from "../components/StatusBar/StatusBar";


export default function Home() {
  return (
    
    <div className="container">
      <h1>マインスイーパーver2.0!</h1>
      <Board></Board>
      <h2>ステータスバー（仮）</h2>
      <StatusBar></StatusBar>
    </div>
  );
}
