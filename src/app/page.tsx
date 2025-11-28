'use client'

import { useState, useEffect } from "react";
import {Board} from "../components/Board/Board"


export default function Home() {
  return (
    
    <div className="container">
      <h1>マインスイーパーver2.0!</h1>
      <Board></Board>
    </div>
  );
}
