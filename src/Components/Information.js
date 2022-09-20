import React from "react";
import "../CSS/style.css";
import Element from "./Element";

export default function Information(props) {


    return (
        <>
            <h1>Rules of the game</h1>
            <h4>Choose one of the 3 available options</h4>
            <h4>The computer will also select one at random</h4>
            <h4>The results of the game can be Victory, Loss or Draw</h4>
            <div className="board-row" style={{marginTop: "3rem", pointerEvents: "none"}}>
                <Element Type={0} />
            </div>
            <div className="board-row multiple-items" style={{padding: "0"}}>
                <i class="fa-solid fa-arrow-right" style={{rotate:"220deg", marginRight: "10px", marginBottom: "-60px"}}></i>
                <i class="fa-solid fa-arrow-right" style={{rotate:"140deg", marginRight: "-130px", marginBottom: "-60px"}}></i>
            </div>
            <div className="board-row multiple-items" style={{marginTop: "4rem", pointerEvents: "none"}}>
                <Element Type={1} />
                <i class="fa-solid fa-arrow-right"></i>
                <Element Type={2} />
            </div>
            <div className="button-container-center">
                <div className="game-button" onClick={() => props.displayInfo(false)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </div>
        </>
    );


}