import React from 'react'
import axios from 'axios'

const SubmitQuestionButton = ({ questionText }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      try {
        await axios.post('/api/questions/add', { questionText })
      } catch (e) {
        alert('Cannot Submit Blank Question')
      }
    }}
  >
    Add Question
  </button>
)

export default SubmitQuestionButton
