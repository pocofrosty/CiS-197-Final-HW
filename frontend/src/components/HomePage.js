import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Title from './subcomponents/Title'
import QuestionPost from './subcomponents/QuestionPost'
import CurrentPost from './subcomponents/CurrentPost'
import LogoutButton from './subcomponents/LogoutButton'
import TextBox from './subcomponents/TextBox'
import SubmitAnswerButton from './subcomponents/SubmitAnswerButton'
import QuestionForm from './subcomponents/QuestionForm'

const HomePage = ({
  setCurrentUsername, currentUsername,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [questionMode, setQuestionMode] = useState(false)

  const [currentID, setCurrentID] = useState('')
  const [questionList, setQuestionList] = useState([])

  const [answerText, setAnswerText] = useState('')

  const updateState = async () => {
    const { data } = await axios.get('/account/currentLogin')
    setCurrentUsername(data)
    const { data: data2 } = await axios.get('/api/questions')
    setQuestionList(data2)
  }

  const getQuestionFromID = id => {
    if (id !== '') {
      const temp = questionList.filter(q => q._id === id)
      return temp[0]
    }
    return null
  }

  useEffect(() => {
    updateState()
    const interval = setInterval(async () => {
      const { data } = await axios.get('/account/currentLogin')
      setCurrentUsername(data)
      const { data: data2 } = await axios.get('/api/questions')
      setQuestionList(data2)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const checkIfLoggedIn = async () => {
    const { data: { LoggedIn } } = await axios.get('/account/verify')
    setIsLoggedIn(LoggedIn)
  }

  checkIfLoggedIn()

  const loginButton = () => (
    <Link to="/login">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In To Submit a Question
      </button>
    </Link>
  )

  const addNewQuestionButton = () => (
    <button
      onClick={() => {
        setQuestionMode(!questionMode)
      }}
    >
      Add New Question
    </button>
  )

  const logoutButton = () => (
    <>
      <label>
        {`Username: ${currentUsername}`}
      </label>
      <LogoutButton setIsLoggedIn={setIsLoggedIn} setCurrentUsername={setCurrentUsername} />
    </>
  )

  const answerForm = () => (
    <>
      <Title text="Answer This Question" />
      <TextBox backgroundName="Answer" text={answerText} setText={setAnswerText} />
      <SubmitAnswerButton _id={currentID} answer={answerText} updateState={updateState} />
    </>
  )

  const questionForm = () => (
    <QuestionForm />
  )

  return (
    <>
      <Title text="Campuswire Lite" />
      <br />
      {isLoggedIn ? logoutButton() : null}
      <br />
      {isLoggedIn ? addNewQuestionButton() : loginButton()}
      {questionMode ? questionForm() : null}
      <br />
      <div>
        {questionList.map(question => (
          <QuestionPost
            key={question._id}
            questionID={question._id}
            setCurrentID={setCurrentID}
            getQuestionFromID={getQuestionFromID}
          />
        ))}
      </div>
      <br />
      <CurrentPost getQuestionFromID={getQuestionFromID} currentID={currentID} />
      <br />
      {isLoggedIn ? answerForm() : null}
    </>
  )
}

export default HomePage
