import './App.css';
import {useState} from 'react';
import QuizCard from '../src/components/QuizCard/QuizCard';
import QuizModal from './components/QuizModal/QuizModal';
import Arithmetic from './components/Arithmetic/Arithmetic';
import {getArithmeticQuestions} from './services/questionsService';

function App() {

  // state variable to open or close quiz modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function manageModal(open) {
    setModalIsOpen(open);
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">PathEd Quiz</h1>
      </header>
      <div className="quizContainer">
      
        <QuizCard onClick={() => manageModal(true)}>
          <h3>Arithmetic</h3>
        </QuizCard>
{/* 
        <QuizCard onClick={() => manageModal(true)}>
          <h3>Programming</h3>
        </QuizCard> */}
      </div>
      
      <footer>
        <p>Developed by PathEd team with ❤️</p>
      </footer>
      <QuizModal isOpen={modalIsOpen} handleClose={() => manageModal(false)} >
        <Arithmetic handleOpen={manageModal}/>
      </QuizModal>
    </div>
  );
}

export default App;
