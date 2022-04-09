import React from 'react'

const QuestionPost = ({
  setCurrentID, questionID, getQuestionFromID,
}) => {
  const question = getQuestionFromID(questionID)
  return (
    <button 
    className="shadow-sm border-solid border-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
    onClick={() => {
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
