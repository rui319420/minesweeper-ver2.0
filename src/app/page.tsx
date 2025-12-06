'use client'

import { Board } from "../components/Board/Board"
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
