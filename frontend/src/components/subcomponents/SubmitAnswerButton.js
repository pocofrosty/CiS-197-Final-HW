import React from 'react'
import axios from 'axios'

const SubmitAnswerButton = ({ _id, answer, updateState }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      try {
        await axios.post('/api/questions/answer', { _id, answer })
        updateState()
      } catch (e) {
        alert('Cannot Submit Blank Answer')
      }
    }}
  >
    Submit Answer
  </button>
)

export default SubmitAnswerButton
