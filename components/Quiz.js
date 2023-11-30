import React, { useState, useEffect } from "react";
import Option from "./Option";
import Question from "./Question";


export default function Quiz(props) {
  const [correct, setCorrect] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [replay,setReplay] = useState (false) 

  function handleOptionSelected(option) {
    const updatedAnswers = [...selectedOptions, option];
    setSelectedOptions(updatedAnswers);
  }

  function checkCorrect(e) {
    e.preventDefault();
    let correctCount = 0;
    if (selectedOptions.length !== props.questions.length) {
      alert("Please answer all questions before checking answers.");
      return;
    }
    for (let i = 0; i < props.questions.length; i++) {
      const correctAnswer = props.questions[i].correctAnswer;
      const selectedAnswer = selectedOptions[i];

      if (selectedAnswer === correctAnswer) {
        correctCount++;
      }
    }
    
    setCorrect(correctCount);
    setIsChecked(true); // Set isChecked to true after checking answers
    setReplay(true)
    
  }

  function handleReset() {
    setCorrect(0);
    setSelectedOptions([]);
    setIsChecked(false);
    setReplay((prevState) => !prevState );
  
    // Fetch new questions
    setTimeout(() => {
      props.fetchQuestions();
    }, 1000);
  }
  
  
  return (
    <div className = "help">
      {props.questions.map((item, index) => (
        <div key={index}>
      
          <Question question={item.question} />
          <Option
            key={item.ID}
            question={item.question}
            answers={item.answerOptions}
            handleOptionSelected={handleOptionSelected}
            correctAnswer={item.correctAnswer}
            isChecked={isChecked} // Pass the isChecked state
          />
        </div>
        
      ))}

{!isChecked ? (
        <div>
          <button className = "button" onClick={checkCorrect}>Check Answers</button>
        </div>
      ) : (
        <div>
         <h1 className="score">You scored {correct} / 5</h1>
          <button className="button" onClick={handleReset}>Replay</button>
        
        </div>
      )}
    </div>
  );
}
