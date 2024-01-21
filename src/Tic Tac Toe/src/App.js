import React from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
    return(
    <main>
        <h1 className="title-game">tic tac toe</h1>
        <GameBoard />
    </main>
    )
}

export default App;