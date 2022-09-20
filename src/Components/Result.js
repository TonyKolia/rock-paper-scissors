import React from "react";
import "../CSS/style.css";
import { GameOutcomes, ElementTypes } from "../Constants";

export default function Result(props) {

    const [resultMessage, setResultMessage] = React.useState("");
    const [playerChoiceClass, setPlayerChoiceClass] = React.useState("");
    const [computerChoiceClass, setComputerChoiceClass] = React.useState("");
    const [resultClass, setResultClass] = React.useState("");

    React.useEffect(() => {

        let shadowColors = [];

        switch (props.gameResult) {
            case GameOutcomes.ComputerVictory:
                setResultMessage("Computer won!");
                setResultClass("fa-face-frown");
                shadowColors = [255, 0, 0];
                break;
            case GameOutcomes.PlayerVictory:
                setResultMessage("You won!");
                setResultClass("fa-face-smile");
                shadowColors = [0, 255, 0];
                break;
            case GameOutcomes.Draw:
                setResultMessage("It's a draw!");
                setResultClass("fa-face-meh-blank");
                shadowColors = [255, 255, 0];
                break;
            default:
                setResultMessage("");
                shadowColors = [0, 0, 0];
                break;
        }

        switch (props.playerChoice) {
            case ElementTypes.Rock:
                setPlayerChoiceClass("fa-hand-back-fist");
                break;
            case ElementTypes.Paper:
                setPlayerChoiceClass("fa-hand");
                break;
            case ElementTypes.Scissors:
                setPlayerChoiceClass("fa-hand-scissors");
                break;
            default:
                setPlayerChoiceClass("fa-question");
                break;
        }

        console.log(props.computerChoice);
        switch (props.computerChoice) {
            case ElementTypes.Rock:
                setComputerChoiceClass("fa-hand-back-fist");
                break;
            case ElementTypes.Paper:
                setComputerChoiceClass("fa-hand");
                break;
            case ElementTypes.Scissors:
                setComputerChoiceClass("fa-hand-scissors");
                break;
            default:
                setComputerChoiceClass("fa-question");
                break;
        }

        let board = document.getElementById("game-board");
        board.classList.remove("board-lock");
        board.style.boxShadow = `rgba(${shadowColors[0]}, ${shadowColors[1]}, ${shadowColors[2]}, 0.3) 0px 4px 16px, rgba(${shadowColors[0]}, ${shadowColors[1]}, ${shadowColors[2]}, 0.3) 0px 8px 24px, rgba(${shadowColors[0]}, ${shadowColors[1]}, ${shadowColors[2]}, 0.3) 0px 16px 56px`

    }, [])

    return (
        <div className="game-result-container">
            <div className="result-message">
                <i className={`fa-solid ${resultClass}`}></i>
                <h2 className="result-description">{resultMessage}</h2>
            </div>
            <div className="result-choice">
                <div className="choice-descriptions">
                    <div className="choices-result-container">
                        <h4>You</h4>
                        <div className="choice-result">
                            <i className={`fa-solid ${playerChoiceClass} choice-value-result`}></i>
                        </div>
                    </div>
                    <div className="choices-result-container">
                        <h4>Computer</h4>
                        <div className="choice-result">
                            <i className={`fa-solid ${computerChoiceClass} choice-value-result`}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container-center">
                <div className="game-button" onClick={() => props.startNewGame()}>
                    <i className="fa-solid fa-arrow-rotate-right"></i>
                </div>
            </div>
        </div>
    );


}