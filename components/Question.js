import React from "react";
import Option from "./Option";
import Quiz from "./Quiz";

export default function Question(props) {
    
  return (
    props.questions.map((item, index) => (
      <div key={index}>
        <Quiz 
          question={item.question}
        />
        <Option
          key={item.ID}
          question={item.question}
          answers={item.answerOptions}
        />
      </div>
    ))
  );
}
