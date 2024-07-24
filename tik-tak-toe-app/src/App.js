
import './App.css';
import { useState } from 'react';
import React from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function onSquareClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Tik-Tak-Toe By Muyinjon Turobov</h1>
      <div className="board-row">
        <square value="1" className="square" ></square>
        <square value="2" className="square" ></square>
        <square value="3" className="square" ></square>
        <square value="4" className="square" ></square>
        <square value="5" className="square" ></square>
        <square value="6" className="square" ></square>
        <square value="7" className="square" ></square>
        <square value="8" className="square" ></square>
        <square value="9" className="square" ></square>
        
      </div>




    </div>
  );
}

export default App;
