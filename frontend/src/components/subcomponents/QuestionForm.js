import React, { useState } from 'react'
import TextBox from './TextBox'
import SubmitQuestionButton from './SubmitQuestionButton'

const QuestionForm = ({}) => {
  const [text, setText] = useState('')
  return (
    <dialog open>
      <label> Add Question: </label>
      <br />
      <TextBox backgroundText="Question Here" text={text} setText={setText} />
      <br />
      <SubmitQuestionButton questionText={text} />
    </dialog>
  )
}

export default QuestionForm
