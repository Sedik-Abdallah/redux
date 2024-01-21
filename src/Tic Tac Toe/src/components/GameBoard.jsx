import React from "react";
import { useState } from "react";

import './styles.css';

const GameBoard = () => {
    const [tableState, setTableState] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    const [xturn, setXturn] = useState(true);
    const [winner, setWinner] = useState("");
    function nextTurn(){
        setXturn(!xturn);
    }
    function checkForWinner(board) {
        // Lignes
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
                return board[i][0];
            }
        }
        // Colonnes
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
                return board[0][i];
            }
        }
        // Diagonales
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
            return board[0][0];
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
            return board[0][2];
        }
        return null;
    }
    function handleClick(row, col) {
        setTableState(currentState => {
            const newState = currentState.map(innerArr => [...innerArr]);
            if (newState[row][col] === '') {
                newState[row][col] = xturn ? 'X' : 'O';
                let win = checkForWinner(newState);
                if (win) {
                    setWinner(win);
                } else if (isDraw(newState)) {
                    setWinner('Match nul');
                }
                return newState;
            }
            return currentState;
        });
        if (tableState[row][col] === '') {
            nextTurn();
        }
    }
    function resetGame() {
        setTableState([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner("");
    }
    function isDraw(board) {
        return board.every(row => row.every(cell => cell !== ''));
    }
    
    return(
        <section className="game-board-section">
            <h1 className={winner ? 'winner' : ''}>
                {winner === 'Match nul' ? 'Match nul !' : (winner && `${winner} est le gagnant !`)}
            </h1>
            
            <table className="game-board-table">
                {tableState.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td 
                                key={colIndex} 
                                onClick={() => handleClick(rowIndex, colIndex)}
                                className={cell === 'X' ? 'x-cell' : cell === 'O' ? 'o-cell' : ''}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
            {winner && (
                <button onClick={resetGame} className="reset-button">
                    Rejouer
                </button>
            )}
        </section>
    )
}

export default GameBoard;