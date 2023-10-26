import React from "react";
import Quiz from "./Quiz";

export default function Option(props) {
  const optionElements = props.answers.map((item,index) => (
    <div key={index}>{item}</div>
  ));

  return (
    <div>
    <Quiz optionElements={optionElements}/>
    </div>
  );
}
