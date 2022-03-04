import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'

function SignUp() {
  const { signUp } = useContext(UserContext)

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      signUp(registerEmail, registerPassword)
      navigate('/login')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h3>Sign up</h3>
    <input placeholder="Email..." 
    onChange={(e) => {
      setRegisterEmail(e.target.value)
    }} />
    <input placeholder="Password..." 
    onChange={(e) => {
      setRegisterPassword(e.target.value)
    }} />
    <button onClick={handleSubmit}>Create user</button>
    </div>
  )
}

export default SignUp