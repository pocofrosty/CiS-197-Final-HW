import React from 'react'

const CurrentPost = ({ currentID, getQuestionFromID }) => {
  const question = getQuestionFromID(currentID)
  if (question) {
    return (
      <div className="grid grid-cols-1 shadow border-solid border-4">
        <br />
        <label className="text-bold text-2xl">
          {`Question: ${question.questionText}`}          
        </label>
        <label>
          {`Author: ${question.author}`}
        </label>
        <label>
          {`Question: ${question.answer}`}
        </label>
      </div>
    )
  }

  return null
}

export default CurrentPost
