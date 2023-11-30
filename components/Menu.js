import React from "react"

export default function Menu(props) {


    return (
        <div className="homescreen">



            <h1>Quizzical</h1>
            <p>test your knowledge!</p>
            <button className="homescreen--button" onClick={props.clickToStart}>Start Quiz</button>
            <img className="yellow_blob" src="yellow_blob.png" alt="yellow_blob" />
            <img className="blue_blob" src="blue_blob.png" alt="yellow_blob" />
        </div>
    )
}