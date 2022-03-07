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
    <div className='container mx-auto flex-col'>
      <div className='py-8'>
        <h3 className='text-xl'>Create Account</h3>
      </div>
      <div className='grid grid-cols-1'>
        <input className='bg-slate-700 my-2 w-64' placeholder="Email..." 
        onChange={(e) => {
          setRegisterEmail(e.target.value)
        }} />
        <input className='bg-slate-700 w-64 my-2' placeholder="Password..." 
        onChange={(e) => {
          setRegisterPassword(e.target.value)
        }} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignUp