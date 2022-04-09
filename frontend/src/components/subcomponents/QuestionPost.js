import React from 'react'

const QuestionPost = ({
  setCurrentID, questionID, getQuestionFromID,
}) => {
  const question = getQuestionFromID(questionID)
  return (
    <button onClick={() => {
      setCurrentID(questionID)
    }}
    >
      <label>
        {' '}
        {question.questionText}
        {' '}
      </label>
    </button>
  )
}

export default QuestionPost
