import { useState } from "react";
import "../../styles/styles.css";

function Dice() {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);

    const rollDice = () => {
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        setDice1(randomNumber1);
        setDice2(randomNumber2);
    };

    const getWinnerMessage = () => {
        if (dice1 > dice2) return '🚩 Player 1 Wins!';
        if (dice2 > dice1) return 'Player 2 Wins! 🚩';
        return 'Draw!';
    };
    return (
        <>
            <div className="container">
                <h1 className="winner">{getWinnerMessage()}</h1>
                <div className="dice">
                    <p>Player 1</p>
                    <img src={`./src/assets/images/dice${dice1}.png`} alt="leff-dice" className="img1" />
                </div>

                <div className="dice">
                    <p>Player 2</p>
                    <img src={`./src/assets/images/dice${dice2}.png`} alt="right-dice" className="img2" />
                </div>
            </div>
            <button className="button" onClick={rollDice}>Refresh</button>
            <footer>Muhammet 🎲 Tarık 🎲 DUMANLI</footer>
        </>
    )
}

export default Dice
