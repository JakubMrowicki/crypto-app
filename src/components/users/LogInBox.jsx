import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/user/UserContext"

function LogIn() {
  const { logIn } = useContext(UserContext)

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      logIn(loginEmail, loginPassword)
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <input placeholder="Email..." 
      onChange={(e) => {
        setLoginEmail(e.target.value)
      }} />
      <input placeholder="Password..." 
      onChange={(e) => {
        setLoginPassword(e.target.value)
      }} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default LogIn