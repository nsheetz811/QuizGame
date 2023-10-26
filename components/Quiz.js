import React, { useState } from "react";
import Option from "./Option";
import Questions from "./Question";

export default function Quiz(props) {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div>
     <h1>{props.question}</h1>
     <h3>{props.optionElements}</h3>
    </div>
  );
}
