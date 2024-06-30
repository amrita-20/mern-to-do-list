import { useEffect, useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'
import { getSession, getTodos } from './services'

function App() {
  const [username, setUsername] = useState("");
  const [todos, setTodos] = useState({});
 
  const fetchSession = () => {
    getSession().then((usernam) => {
      setUsername(usernam);
      return getTodos();
    })
    .then((newTodos) => {
      setTodos(prevTodos => ({...prevTodos, ...newTodos}))
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchSession();
  }, [])

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
