import React, {useState, useEffect} from 'react';
import './Arithmetic.css';
import {getArithmeticQuestions} from '../../services/questionsService'

function Arithmetic(props) {

    const questions = [
        {
            id: 1,
            question: "2 + 2",
            answer: 4
        },
        {
            id: 2,
            question: "3 + 2",
            answer: 5
        },
        {
            id: 3,
            question: "4 + 2",
            answer: 6
        },
        {
            id: 4,
            question: "5 + 2",
            answer: 7
        },
        {
            id: 5,
            question: "42 + 20",
            answer: 62
        },
        {
            id: 6,
            question: "31 + 21",
            answer: 52
        },
        {
            id: 7,
            question: "42 + 22",
            answer: 64
        },
        {
            id: 8,
            question: "55 + 22",
            answer: 77
        }
    ]

    // correct answer
    // const [inputFieldColors, setInputFieldColors] = useState({
    //     firstAns: '',
    //     secondAns: '',
    //     thirdAns: '',
    //     fourthAns: ''
    // });

    // correct or wrong
    // const [userAnswers, setUserAnswers] = useState([])

    // set questions begining and ending range
    const [currentStart, setCurrentStart] = useState(0);
    const [currend, setCurrend] = useState(4);

    // store question from api
    const [questionsArray, setQuestionsArray] = useState(questions.slice(currentStart, currend));


    const handleAnswerInputChange = (e) => {
        const inpName = e.target.name;
        const answeredQuestion = questionsArray.filter(question => question.id.toString() === inpName)
        console.log(answeredQuestion)
        if(e.target.value=== answeredQuestion[0].answer.toString()){
            e.target.classList.remove('wrong')
            console.log("Answer is 2")
            e.target.classList.add('correct')
        }
        else {
            e.target.classList.remove('correct')
            e.target.classList.add('wrong')
        }

        console.log(e.target.value)
    } 

    // get questions


    useEffect(() => {
        setQuestionsArray(questions.slice(currentStart, currend))
        console.log(questionsArray)
    }, [currentStart])

    return (
        <div className="Arithmetic">
            <h2 className="question">Calculate equations below.</h2>

            <div className="answersCont">
                <div className="answers">
                    <div className="answer">
                        <p className="ansText">{questionsArray[0].question} = </p>
                        <input
                            name={questionsArray[0].id} 
                            className={"ansInp"} 
                            type="number"
                            onChange={handleAnswerInputChange}/>
                    </div>
                    <div id={questionsArray[1].id} className="answer">
                        <p className="ansText">{questionsArray[1].question} = </p>
                        <input 
                            name={questionsArray[1].id}
                            className={"ansInp"} 
                            type="number"
                            onChange={handleAnswerInputChange}/>
                    </div>
                </div>
                <div className="answers">
                    <div id={questionsArray[2].id} className="answer">
                        <p className="ansText">{questionsArray[2].question} = </p>
                        <input 
                            name={questionsArray[2].id} 
                            className={"ansInp"} 
                            type="number"
                            onChange={handleAnswerInputChange}/>
                    </div>
                    <div id={questionsArray[3].id} className="answer">
                        <p className="ansText">{questionsArray[3].question} = </p>
                        <input
                            name={questionsArray[3].id}
                            className={"ansInp"} 
                            type="number"
                            onChange={handleAnswerInputChange}/>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => {
                    if(currend !== questions.length){
                        setCurrentStart(currend);
                        setCurrend(currend + 4);
                        console.log("next cliked")
                        // setQuestionsArray(questions.slice(currentStart, currend))
                    } else {
                        props.handleOpen()
                    }
                }} 
            >{currend !== questions.length ? "NEXT" : "DONE"}</button>
        </div>
    );
}

export default Arithmetic;