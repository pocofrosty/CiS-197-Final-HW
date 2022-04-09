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
    <Link className="col-span-2 grow-0 py-2 px-4"
    to="/login">
      <button
        className="col-span-2 grow bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In To Submit a Question
      </button>
    </Link>
  )

  const addNewQuestionButton = () => (
    <button className="col-span-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
        {`Current Username: ${currentUsername}`}
      </label>
      <LogoutButton setIsLoggedIn={setIsLoggedIn} setCurrentUsername={setCurrentUsername} />
    </>
  )

  const answerForm = () => (
    <div className="grid cols-span-2 grid-cols-1 py-2 px-16">
      <Title text="Answer This Question" />
      <TextBox backgroundName="Answer" text={answerText} setText={setAnswerText} />
      <SubmitAnswerButton _id={currentID} answer={answerText} updateState={updateState} />
    </div>
  )

  const questionForm = () => (
    <QuestionForm questionMode={questionMode} setQuestionMode={setQuestionMode} />
  )

  return (
    <div className="grid grid-cols-2 py-2 px-16">
      <Title className="text-left font-bold text-3xl" text="Campuswire Lite" />
      <br />
      {isLoggedIn ? logoutButton() : null}
      <br />
      {isLoggedIn ? addNewQuestionButton() : loginButton()}
      {questionMode ? questionForm() : null}
      <div className="grid grid-cols-1 py-2 px-16">
        {questionList.map(question => (
          <QuestionPost
            key={question._id}
            questionID={question._id}
            setCurrentID={setCurrentID}
            getQuestionFromID={getQuestionFromID}
          />
        ))}
      </div>
      <CurrentPost getQuestionFromID={getQuestionFromID} currentID={currentID} />
      <br />
      {isLoggedIn ? answerForm() : null}
    </ div>
  )
}

export default HomePage
