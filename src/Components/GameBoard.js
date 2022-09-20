import React from "react";
import Element from "./Element";
import "../CSS/style.css";
import Result from "./Result";

export default function GameBoard(props) {

    return (
        <div className="game-board" id="game-board">
            {
                props.gameResult == -1 ?
                    <>
                        <div className="count-down-item" id="count-3">
                            <h1 className="timer"><i className="fa-solid fa-hand-back-fist"></i></h1>
                        </div>
                        <div className="count-down-item" id="count-2">
                            <h1 className="timer"><i className="fa-solid fa-hand"></i></h1>
                        </div>
                        <div className="count-down-item" id="count-1">
                            <h1 className="timer"><i className="fa-solid fa-hand-scissors"></i></h1>
                        </div>
                        <div className="board-row">
                            <Element Type={0} setPlayerChoice={props.setPlayerChoice} />
                        </div>
                        <div className="board-row multiple-items">
                            <Element Type={1} setPlayerChoice={props.setPlayerChoice} />
                            <Element Type={2} setPlayerChoice={props.setPlayerChoice} />
                        </div>
                    </>
                : <Result startNewGame={props.startNewGame} gameResult={props.gameResult} playerChoice={props.playerChoice} computerChoice={props.computerChoice} />
             }

        </div>
    );

}