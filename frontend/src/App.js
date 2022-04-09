import React, { useState, useEffect } from 'react'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

function App() {
  const [currentUsername, setCurrentUsername] = useState('')

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm setCurrentUsername={setCurrentUsername} />} />
          <Route path="" element={<HomePage setCurrentUsername={setCurrentUsername} currentUsername={currentUsername} />} />
          <Route path="*" element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}
const Layout = () => (
  <div>
    <Outlet />
  </div>
)

const Test = () => (
  <div>
    <h1>Invalid Site </h1>
  </div>
)

export default App