import { useState } from "react";
import "../../styles/styles.css";

function Dice() {
    const [diceLeft, setDiceLeft] = useState(1);
    const [diceRight, setDiceRight] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

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

            if (randomNumber1 > randomNumber2) {
                setPlayer1Score(prev => prev + 1);
            } else if (randomNumber2 > randomNumber1) {
                setPlayer2Score(prev => prev + 1);
            }
        }, 3000);

    };

    const getWinnerMessage = () => {
        if (isRolling) return 'Rolling...'
        if (diceLeft > diceRight) return '🚩 Player 1 Wins!';
        if (diceRight > diceLeft) return 'Player 2 Wins! 🚩';
        return 'Draw!';
    };

    const handleNameChange = (e) => {
        setPlayer1Name(e.target.value || 'Player 1');
    }
    return (
        <>
            <div className="container">
                <h1 className="winner">{getWinnerMessage()}</h1>
                <div className="dice">
                    <p><input type="text" className="input" value={player1Name} onChange={handleNameChange} placeholder="Player 1" disabled={isRolling} /></p>
                    <p className="score">Score: {player1Score}</p>
                    <img src={`./src/assets/images/dice${diceLeft}.png`} alt="leff-dice" className="img1" />
                </div>

                <div className="dice">
                    <p>Player 2</p>
                    <p className="score">Score: {player2Score}</p>
                    <img src={`./src/assets/images/dice${diceRight}.png`} alt="right-dice" className="img2" />
                </div>
            </div>
            <button className="button" onClick={rollDice} disabled={isRolling}>{isRolling ? 'Rolling...' : 'Roll Dice'}</button>
            <footer>Muhammet 🎲 Tarık 🎲 DUMANLI</footer>
        </>
    )
}

export default Dice
