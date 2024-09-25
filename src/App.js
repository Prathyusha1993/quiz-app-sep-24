import './App.css';
import questions from './components/questions.json';
import QuestionsComp from './components/QuestionsComp';
import ResultComp from './components/ResultComp';
import React, {useState} from 'react'

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswers([...userAnswers, isCorrect])
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {currentQuestion < questions.length && 
      <QuestionsComp question={questions[currentQuestion]} onAnswerClick={handleNextQuestion} /> }
      {currentQuestion === questions.length && 
      <ResultComp userAnswers={userAnswers} questions={questions} resetQuiz = {resetQuiz} />}
    </div>
  );
}

export default App;
