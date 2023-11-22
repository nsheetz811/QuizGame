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
         <h1>Your score is: {correct} out of 5</h1>
          <button className="button" onClick={handleReset}>Replay</button>
          
        </div>
      )}
    </div>
  );
}


/* WHY SPREAD OPERATOR IS NEEDED FOR SELECTEDOPTIONS--
The direct modification of the selectedOptions array would have several consequences:

Immutability Violation: React relies on immutability to efficiently detect state changes and trigger re-renders.
 When you modify the existing array directly, you violate this principle. 
 React might not recognize the change because the reference to the array remains the same, and as a result, it may not trigger re-renders.

Unpredictable Behavior: Without immutability, your component's behavior becomes unpredictable. 
Other components or functions that rely on the state might behave unexpectedly because they won't detect changes in the state due to the direct mutation.

Debugging Challenges: Debugging issues related to state changes becomes more challenging when you modify state in place. 
It can be difficult to track down where and how the state was changed, which can lead to hard-to-find bugs.

So, if you do not use the spread operator and directly modify the selectedOptions array, the outcome would likely be that your component's UI may
 not update correctly in response to the state changes, and you might experience unexpected and difficult-to-debug issues in your application. 
 It's essential to follow React's recommended practices for state management, which include maintaining immutability by creating new objects or arrays 
 when updating state variables.
*/