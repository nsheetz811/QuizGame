import React from "react"

export default function Menu(props){

 
 return(
  <div className="homescreen">
             
  <img className="yellow_blob"src= "yellow_blob.png" alt="yellow_blob"/>
  
  <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="homescreen--button" onClick={props.clickToStart}>Start Quiz</button>
      
  <img className="blue_blob" src= "blue_blob.png" alt="yellow_blob"/>
  </div>
 )
}