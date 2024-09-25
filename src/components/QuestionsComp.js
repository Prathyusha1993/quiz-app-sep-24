import React from 'react'

const QuestionsComp = ({ question, onAnswerClick= () => {} }) => {
  return (
    <div className='question'>
        <h2>{question.question}</h2>
        <ul className='options'>
            {question?.answerOptions?.map((ans) => {
                return (
                    <li key={ans.text} >
                        <button onClick={() => onAnswerClick(ans.isCorrect)}>{ans.text}</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default QuestionsComp