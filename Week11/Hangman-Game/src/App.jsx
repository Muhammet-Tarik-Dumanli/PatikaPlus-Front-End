import { useState, useEffect } from 'react'
import { DATA } from './data';
import './App.css'
const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "T", "U", "Ü", "V", "Y", "Z"];

function App() {

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [resultQuestion, setResultQuestion] = useState(false);
  const [wrong, setWrong] = useState(false);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const setKeyword = (keyword) => {
    if (keywords.length < answer.length) {
      keywords.push(keyword);
      setKeywords([...keywords]);
    }
    if (keywords.length === answer.length) {
      if (answer === keywords.join("")) {
        setIndex(index + 1);
        setKeywords([]);
        setResultQuestion(true);
      } else {
        setWrong(true);
      }
    }
  }

  const removeKeyword = (index) => {
    keywords.splice(index, 1);
    setKeywords([...keywords])
  }

  useEffect(() => {
    setWrong(false);
    setResultQuestion(false);
    setAnswer("");
    if (typeof DATA[index] !== 'undefined') {
      const answer = DATA[index].answer.toLowerCase();
      setAnswer(answer);
      setQuestion(DATA[index].question);

      const stringToArray = answer.split("");
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      const alphabetLowerData = stringToArray.map((answer) => answer.toLowerCase());
      setAnswerArray(shuffle(alphabetLowerData));
    }
  }, [resultQuestion]);

  return (
    <div className='App'>
      {answer !== "" && (
        <>
          <div>
            <span className='question-name'>{question}</span>
          </div>
          <div className='question-area'>
            {keywords.map((item, index) => (
              <span
                key={index}
                style={{ borderBottom: wrong ? '3px solid red' : '3px solid #ddd' }}
                className='question'
                onClick={() => removeKeyword(index)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className='button-area'>
            {answerArray.map((item, index) => (
              <button
                key={index}
                className='button'
                onClick={() => setKeyword(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
      {
        answer === "" &&
        <div className="empty-message">Sorular Bitti</div>
      }
    </div>
  );

}

export default App
