import React from 'react'
import QuestionCard from './components/QuestionCard'
import {fetchQuizQuestions,Difficulty} from "./API"
function App() {
  fetchQuizQuestions(10,Difficulty.HARD)
  return (
    <div className='app'>
      <h1>Quiz with React + Typescript</h1>
      <QuestionCard/>
    </div>
  )
}

export default App