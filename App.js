import React, {useState,useEffect} from "react"

import Menu from "./components/Menu.js"
import Question from "./components/Question.js"
import Option from "./components/Option.js"
import he from "he";
import _ from 'lodash';
import { nanoid } from 'nanoid';


export default function App(){
  //   const [startGame,setStartGame] = useState(false)
     const [questions,setQuestions] = useState([])
  //   const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);


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
              answerOptions: _.shuffle(answerOptions),
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
   
   const start = () =>{
       setStartGame(true)
   }

    return(

  <div>
<Question 
questions={questions}
/>

</div>
 )
    
}