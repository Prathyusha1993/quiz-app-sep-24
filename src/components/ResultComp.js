import React from 'react'

const ResultComp = ({userAnswers, questions, resetQuiz= () => {}}) => {
    const correctAnswers = userAnswers.filter((ans) => ans).length;
  return (
    <div className='results'>
        <h2>Results:</h2>
        <p>You answered {correctAnswers} out of {questions.length} questions.
            <span onClick={resetQuiz} style={{textDecoration:'underline', color: 'red'}}>Click here to Retry</span>
        </p>

    </div>
  )
}

export default ResultComp