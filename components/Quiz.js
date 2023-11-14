import React, { useState } from "react";
import Option from "./Option";
import Question from "./Question";

// ...

export default function Quiz(props) {
  const [correct, setCorrect] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isChecked, setIsChecked] = useState(false); // Add isChecked state

  function handleOptionSelected(option) {
    const updatedAnswers = [...selectedOptions, option];
    setSelectedOptions(updatedAnswers);
  }

  function checkCorrect(e) {
    e.preventDefault();
    let correctCount = 0;
    for (let i = 0; i < props.questions.length; i++) {
      const correctAnswer = props.questions[i].correctAnswer;
      const selectedAnswer = selectedOptions[i];

      if (selectedAnswer === correctAnswer) {
        correctCount++;
      }
    }

    setCorrect(correctCount);
    setIsChecked(true); // Set isChecked to true after checking answers
  }

  return (
    <div>
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

    <button className="button" onClick={checkCorrect}>
        Check Answers
      </button>
    </div>
  );
}
