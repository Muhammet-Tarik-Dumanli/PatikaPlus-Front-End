import { useState } from "react";
import "../../styles/styles.css";

function Dice() {
    const [diceLeft, setDiceLeft] = useState(1);
    const [diceRight, setDiceRight] = useState(1);
    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        setIsRolling(true);
        const interval = setInterval(() => {
            setDiceLeft(Math.floor(Math.random() * 6) + 1);
            setDiceRight(Math.floor(Math.random() * 6) + 1);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const randomNumber1 = Math.floor(Math.random() * 6) + 1;
            const randomNumber2 = Math.floor(Math.random() * 6) + 1;
            setDiceLeft(randomNumber1);
            setDiceRight(randomNumber2);
            setIsRolling(false);
        }, 3000)

    };

    const getWinnerMessage = () => {
        if(isRolling) return 'Rolling...'
        if (diceLeft > diceRight) return '🚩 Player 1 Wins!';
        if (diceRight > diceLeft) return 'Player 2 Wins! 🚩';
        return 'Draw!';
    };
    return (
        <>
            <div className="container">
                <h1 className="winner">{getWinnerMessage()}</h1>
                <div className="dice">
                    <p>Player 1</p>
                    <img src={`./src/assets/images/dice${diceLeft}.png`} alt="leff-dice" className="img1" />
                </div>

                <div className="dice">
                    <p>Player 2</p>
                    <img src={`./src/assets/images/dice${diceRight}.png`} alt="right-dice" className="img2" />
                </div>
            </div>
            <button className="button" onClick={rollDice} disabled={isRolling}>{isRolling ? 'Rolling...' : 'Roll Dice'}</button>
            <footer>Muhammet 🎲 Tarık 🎲 DUMANLI</footer>
        </>
    )
}

export default Dice
