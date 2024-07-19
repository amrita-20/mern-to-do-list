import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm'
import { addSession, getSession } from './services'

function App() {


  const onLogin = (username) =>{
    addSession(username).then((data) => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getSession().then((data)=>{
      console.log(data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <LoginForm onLogin={onLogin} />
    </>
  )
}

export default App
