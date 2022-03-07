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
    <div className="container mx-auto flex-col">
      <div className="py-8">
        <h3 className="text-xl">Log In</h3>
      </div>
      <div className="grid grid-cols-1">
        <input className="bg-slate-700 w-64 my-2" placeholder="Email..." 
          onChange={(e) => {
            setLoginEmail(e.target.value)
          }} />
          <input className="bg-slate-700 my-2 w-64" placeholder="Password..." 
          onChange={(e) => {
            setLoginPassword(e.target.value)
          }} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn