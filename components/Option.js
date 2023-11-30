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
              : "option"} >
        {item}
      </div>
    );
  });

  return (
    <div className="line--stuff">
      <div className="option--homescreen">
        {optionElements}

        <img className="yellow_blob" src="yellow_blob.png" alt="yellow_blob" />
        <img className="blue_blob" src="blue_blob.png" alt="blue_blob" />
       
      </div>
      <img className="line" src="line.png" alt="line" />
    </div>
  )
}



