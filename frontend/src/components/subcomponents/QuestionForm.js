import React, { useState } from 'react'
import TextBox from './TextBox'
import SubmitQuestionButton from './SubmitQuestionButton'

const QuestionForm = ({questionMode, setQuestionMode}) => {
  const [text, setText] = useState('')
  return (
    <dialog open={ questionMode ? 'open': false} className="grid grid-cols-1 py-2 px-16 shadow border-solid border-4">
      <label> Add Question: </label>
      <br />
      <TextBox backgroundName="Question Here" text={text} setText={setText} />
      <br />
      <SubmitQuestionButton questionText={text} />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        setQuestionMode(!questionMode)
      }}> Close </button>
    </dialog>
  )
}

export default QuestionForm
