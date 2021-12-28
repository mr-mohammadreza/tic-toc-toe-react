import React from "react";
import Typography from '@mui/material/Typography';
import TicTacToe from './TicTacToe';
import './TicTacToe.css';
const App = () => {

    return (
        <div >
          {/* <h1>TicTacToe Game</h1> */}
          <Typography className ="gg"variant="h1" component="div" gutterBottom>TicTacToe Game</Typography>
           <TicTacToe /> 
        </div>
    );
}

export default App; 