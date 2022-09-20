import React from "react";
import "../CSS/style.css";
import Information from "./Information";

export default function Home(props) {

    const [showInfo, setShowInfo] = React.useState(false);

    const displayInfo = (flag) => setShowInfo(flag);

    return (
        <div className="home-container">
            {
                showInfo ? <Information displayInfo={displayInfo} /> :
                    <>
                        <h2>Welcome to Tony's</h2>
                        <h1>Rock Paper Scissors!</h1>
                        <h3>Battle against the computer for the ultimate victory!</h3>
                        <div className="button-container-center" style={{ paddingTop: "3rem", paddingBottom: "1rem", width: "100%", justifyContent: "space-evenly" }}>
                            <div className="game-button" onClick={() => props.beginGame()}>
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <div className="game-button" onClick={() => displayInfo(true)}>
                                <i className="fa-solid fa-question"></i>
                            </div>
                        </div>
                    </>
            }
        </div>
    );

}