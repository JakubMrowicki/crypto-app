import { useState } from "react"

function LogIn() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

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
      <button>Login</button>
    </div>
  )
}

export default LogIn