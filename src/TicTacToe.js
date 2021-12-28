import React, { useState } from 'react';
import './TicTacToe.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					
					if (winner === 'x' || winner === 'o') {
						lock();
					} else {
						setWinner(squares[pattern[0]]);
					}
					
				}
				
			});
		}
	};

	function lock() {
		Cell.setAttribute("disable", "true");
	}
	function unlock() {
		
		Cell.setAttribute("disable", "false");
		
		
	}
	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}
	
		checkForWinner(squares);
		setCells(squares);
		if (squares[0] !='' && squares[1] !='' &&
		squares[2] !='' && squares[3] !='' &&
		squares[4] !='' && squares[5] !='' &&
		squares[6] !='' && squares[7] !='' &&
		squares[8] !=''  ) {
					setWinner("No one ");
			}
		
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
		unlock();
	};

	const Cell = ({ num }) => {
		return <Button variant="outlined" onClick={() => handleClick(num)}>{cells[num]}</Button>;
	};

	// Cell.style.onClick = ;
	return (
		<div className='container'>
			<table className=' notfinishgame' id='finishgame'>
				Turn: {turn}
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<Typography className ="gg"variant="h5" component="div" gutterBottom>{winner} is the winner!</Typography>
					<Button onClick={() => handleRestart()} variant="contained" color="warning">Play Again</Button>
				
				</>
			)}
		</div>
	);
};

export default TicTacToe;