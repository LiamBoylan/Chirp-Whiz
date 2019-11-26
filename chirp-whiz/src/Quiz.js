import React, { useState, useEffect } from 'react';
import birdList from './birdList';
import QuizQuestion from './quizComponents/QuizQuestion';
import ResultPage from './quizComponents/ResultPage';
import AudioButton from './quizComponents/AudioButton';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function chooseBirds(habs) {
  let birds = [];

  for (let i = 0; i < birdList.length; i++) {
    let isFromHab = false;

    for (let j = 0; j < habs.length; j++) {
      if (birdList[i].habitat.includes(habs[j]))
        isFromHab = true;
    }

    if (isFromHab) birds.push(i);
  }

  return birds;
}

export function checkAnswer(choice, correctBird) {
  var aType = "";
  if (choice === correctBird) {
    aType = "correct";
    let x = document.getElementById("ding");
    x.volume = 0.2;
    x.play();
  } else {
    aType = "incorrect";
    let x = document.getElementById("buzz");
    x.volume = 0.1;
    x.play();
  }

  return aType;
}

export function randomize(whichState, availBirds) {
  if (whichState === "birds") {
    var arr = [];
    while(arr.length < 4) {
      var r = availBirds[Math.floor(Math.random() * availBirds.length)];
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  } else {
    return(Math.floor(Math.random() * 4));
  }
}

function Quiz() {
  const [questionNum, setQuestionNum] = useState(5);
  const [numCorrect, setNumCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizStart, setQuizStart] = useState(false);
  const [availBirds, setAvailBirds] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [birds, setBirds] = useState([0, 1, 2, 3]);
  const [correctBird, setCorrectBird] = useState(0);
  const [answerType, setAnswerType] = useState("none_yet");
  const [chosenHabs, setChosenHabs] = useState(['Forest']);
  {/*const [chosenHabs, setChosenHabs] = useState(['Forest', 'Backyard', 'Field', 'Orchard', 'Desert', 'Streamside', 'River Edge']);*/}
  
  return (
    <div>
      {quizStart ? (
        answered ? (
          renderResult()
        ) : (
          renderQuestion()
        )
      ) : (
        currentQuestion === questionNum ? (
          <ResultPage correct={numCorrect} totalQs={questionNum}/>
        ) : (
          <QuizOptions />
        )
      )}
      {(quizStart || currentQuestion === questionNum) && 
      <Button variant="secondary" onClick={() => setTimeout(() => window.location.reload(false), 200)}>Return</Button>
      }
      <audio id="buzz">
        <source src="https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3" type="audio/mpeg"></source>
      </audio>
      <audio id="ding">
        <source src="https://www.myinstants.com/media/sounds/correct.swf.mp3" type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default Quiz;