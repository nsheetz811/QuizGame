import React, { useState, useEffect } from "react"

export default function Option(props) {
  const [selectedOption, setSelectedOption] = useState();

  function handleChange(option) {
    setSelectedOption(option);
    props.handleOptionSelected(option);
  }

  const optionElements = props.answers.map((item, index) => {


    return (
      <div
        key={index}
        onClick={() => handleChange(item)}
        className={
          props.isChecked
            ?
            item === props.correctAnswer
              ? "correct"
              : item === selectedOption
                ? "incorrect"
                : "option"
            : item === selectedOption
              ? "selected"
              : "option"
        }
      >
        {item}
      </div>
    );
  });

  return (

      <div className="option--homescreen">
    {optionElements}
    
    </div>
  
  )
}



