import React from 'react'

const CurrentPost = ({ currentID, getQuestionFromID }) => {
  const question = getQuestionFromID(currentID)
  if (question) {
    return (
      <>
        <br />
        <label>
          {question.questionText}
        </label>
        <label>
          {question.author}
        </label>
        <label>
          {question.answer}
        </label>
      </>
    )
  }

  return null
}

export default CurrentPost
