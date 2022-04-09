import React from 'react'
import axios from 'axios'

const LogoutButton = ({ setIsLoggedIn, setCurrentUsername }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={async () => {
      try {
        await axios.post('/account/logout')
        setIsLoggedIn(false)
        setCurrentUsername('')
      } catch (e) {
        alert('Cannot Log Out')
      }
    }}
  >
    Log Out
  </button>
)

export default LogoutButton
