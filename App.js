import React, { useState, useEffect } from "react"
import Menu from "./components/Menu.js"
import Quiz from "./components/Quiz.js"
import he from "he";
import _ from 'lodash';
import { nanoid } from 'nanoid';


export default function App() {
  const [startGame, setStartGame] = useState(false)
  const [questions, setQuestions] = useState([])



  useEffect(() => {
    // Fetch data when the component mounts (you can trigger this function based on user interactions)
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(response => response.json())
      .then(data => {
        const questions = data.results.map(questionData => {

          const answerOptions =
            [...questionData.incorrect_answers, questionData.correct_answer];

          const formattedQuestion = {

            question: he.decode(questionData.question),
            answerOptions: _.shuffle(answerOptions.map(option => he.decode(option))),
            correctAnswer: he.decode(questionData.correct_answer),
            ID: nanoid()

          };

          return formattedQuestion;

        });

        setQuestions(questions);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const start = () => {
    setStartGame(true)
    
  }

  return (

    <div>

      {
      startGame 
      ? 
      <Quiz questions={questions} setQuestions={setQuestions} fetchQuestions={fetchQuestions} />
     : 
     <Menu clickToStart={start} />
    }

    </div>
  )

}