import React, { useState } from 'react';
import './TicTacToe.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TicTacToe = () => {
	const [turn, setTurn] = useState('X');
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
					
					if (winner === 'X' || winner === 'O') {
						lock();
					} else {
						setWinner(squares[pattern[0]]);
					}
					
				}else if (squares[0] !='' && squares[1] !='' &&
				squares[2] !='' && squares[3] !='' &&
				squares[4] !='' && squares[5] !='' &&
				squares[6] !='' && squares[7] !='' &&
				squares[8] !=''  ) {
							setWinner("No one ");
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

		if (turn === 'X') {
			squares[num] = 'X';
			setTurn('O');
		} else {
			squares[num] = 'O';
			setTurn('X');
		}
	
		checkForWinner(squares);
		setCells(squares);
		
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
		unlock();
	};

	const Cell = ({ num }) => {
		return <button className = "aa" onClick={() => handleClick(num)}>{cells[num]}</button>;
	};

	return (
		<div className='container'>
			<Typography className ="pwinner"variant="p" component="div" gutterBottom>Turn: {turn}</Typography>
			<table id='finishgame'>
				
				<tbody>
					<tr className='kk'>
						<td><Cell num={0} /></td>
						<td><Cell num={1} /></td>
						<td><Cell num={2} /></td>
					</tr>
					<tr className='kk'>
					<td><Cell num={3} /></td>
					<td><Cell num={4} /></td>
					<td><Cell num={5} /></td>
					</tr>
					<tr className='kk'>
					<td><Cell num={6} /></td>
					<td><Cell num={7} /></td>
					<td><Cell num={8} /></td>
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<Typography className ="pwinner"variant="h5" component="div" gutterBottom>{winner} is the winner!</Typography>
					<Button onClick={() => handleRestart()} variant="contained" color="warning">Play Again</Button>
				
				</>
			)}
		</div>
	);
};

export default TicTacToe;