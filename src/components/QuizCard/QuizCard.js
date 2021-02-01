import React from "react";
import "./QuizCard.css";

function QuizCard(props) {
    return (
        <div className="cardContainer" onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default QuizCard;
