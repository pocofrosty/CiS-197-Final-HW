import React from 'react'
import axios from 'axios'

const SignUpButton = ({ username, password, navigate }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      try {
        await axios.post('/account/signup', { username, password })
        navigate('/', { replace: true })
      } catch (e) {
        alert('Username Already Taken')
      }
    }}
  >
    Sign Up
  </button>
)

export default SignUpButton
