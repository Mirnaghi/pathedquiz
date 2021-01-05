import './App.css';
import QuizCard from "../src/components/QuizCard/QuizCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">PathEd Quiz</h1>
      <div className="quizContainer">
        <QuizCard>
          <h3>Arithmetic</h3>
        </QuizCard>

        <QuizCard>
          <h3>Programming</h3>
        </QuizCard>
      </div>
    </div>
  );
}

export default App;
