import React from "react";
import TicTacToe from './TicTacToe';
import './TicTacToe.css';
const App = () => {

    return (
        <div >
          <h1 className ="pwinner">TicTacToe Game</h1>
          
           <TicTacToe /> 
        </div>
    );
}

export default App; 