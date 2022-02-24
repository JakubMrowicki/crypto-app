import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword
        )
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
    <button onClick={register}>Create user</button>
    </div>
  )
}

export default SignUp