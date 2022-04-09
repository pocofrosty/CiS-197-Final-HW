import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import TextBox from './subcomponents/TextBox'
import Title from './subcomponents/Title'
import LoginButton from './subcomponents/LoginButton'

const LoginForm = ({ setCurrentUsername }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <>
      <Title text="Log In" />
      <br />
      <label> Username: </label>
      <br />
      <TextBox backgroundName="Username" setText={setUsername} />
      <br />
      <label> Password: </label>
      <br />
      <TextBox backgroundName="Password" setText={setPassword} />
      <br />
      <LoginButton username={username} password={password} setCurrentUsername={setCurrentUsername} switchScreens={navigate} />
      <br />
      <label> Don&apos;t have an account? </label>
      <Link to="/signup"> Sign Up </Link>
    </>
  )
}

export default LoginForm
