import { useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>Welcome</header>
     <main>
      <LoginForm />
     </main>
     <footer>Privacy Policy</footer>
    </>
  )
}

export default App
