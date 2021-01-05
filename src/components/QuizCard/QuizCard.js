import React from "react";
import "./QuizCard.css";

function QuizCard(props) {
    return (
        <div className="cardContainer">
            {props.children}
        </div>
    );
}

export default QuizCard;
