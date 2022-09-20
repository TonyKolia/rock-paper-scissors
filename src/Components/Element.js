import React from "react";
import "../CSS/style.css";
import { ElementTypes, GameOutcomes } from "../Constants";



export default function Element(props) {

    const [symbolClass, setSymbolClass] = React.useState();
    const [symbolValue, setSymbolValue] = React.useState();

    React.useEffect(() => {

        switch(props.Type){
            case ElementTypes.Rock:
                setSymbolClass("fa-hand-back-fist");
                break;
            case ElementTypes.Paper:
                setSymbolClass("fa-hand");
                break;
            case ElementTypes.Scissors:
                setSymbolClass("fa-hand-scissors");
                break;
            default:
                setSymbolClass("fa-question");
                break;
        }

        setSymbolValue(props.Type);

    },[]);

    const ElementClick = (type) => {

        let board = document.getElementById("game-board");
        board.classList.add("board-lock");

        let element = document.getElementById(type);
        element.classList.add("selected-choice");

        setTimeout(() => {
            let element = document.getElementById("count-3");
            element.style.display = "flex";
        }, 500);

        setTimeout(() => {
            let element = document.getElementById("count-3");
            element.style.display = "none";

            element = document.getElementById("count-2");
            element.style.display = "flex";
        }, 1000);

        setTimeout(() => {
            let element = document.getElementById("count-2");
            element.style.display = "none";

            element = document.getElementById("count-1");
            element.style.display = "flex";
        }, 1500);

        setTimeout(() => props.setPlayerChoice(symbolValue), 2000);
    }

    return (<>
        <div className="game-button" onClick={() => ElementClick(`choice-${props.Type}`)} id={`choice-${props.Type}`}>
            <i className={`fa-solid ${symbolClass}`}></i>
        </div>
    </>);


}
