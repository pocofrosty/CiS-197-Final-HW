import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import TextBox from './subcomponents/TextBox'
import Title from './subcomponents/Title'
import SignUpButton from './subcomponents/SignUpButton'

const SignUpForm = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 py-2 px-3 px-16">
      <Title className="text-left font-bold text-3xl" text="Sign Up" />
      <br />
      <label> Username: </label>
      <br />
      <TextBox backgroundName="Username" setText={setUsername} />
      <br />
      <label> Password: </label>
      <br />
      <TextBox backgroundName="Password" setText={setPassword} />
      <br />
      <SignUpButton navigate={navigate} username={username} password={password} />
      <br />
      <label> Already have an account? </label>
      <Link className="text-blue-500" to="/login"> Login</Link>
    </div>
  )
}

export default SignUpForm
