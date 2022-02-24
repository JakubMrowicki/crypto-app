import { useState, useContext } from 'react'
import CryptoContext from '../../context/crypto/CryptoContext'
import { searchCryptos } from '../../context/crypto/CryptoActions'
import { useNavigate } from 'react-router-dom'

function NavbarSearch() {
  const [input, setInput] = useState('')

  const navigate = useNavigate()

  const { dispatch } = useContext(CryptoContext)

  const handleChange = (e) => setInput(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input === '') {
      alert('Please enter something! (bitcoin, ethereum etc.)')
    } else {
      dispatch({type: 'SET_LOADING'})
      const getSearchData = async () => {
        const searchData = await searchCryptos(input)
        dispatch({type: 'GET_SEARCHED', payload: searchData})
        navigate(`/search/${input}`)
      }
      getSearchData()
      setInput('')
    }
  }

  return (
    <div className='relative text-center mr-8 mx-auto text-gray-400 lg:block hidden'>
      <form onSubmit={handleSubmit}>
        <input
          className='border-2 border-slate-800 bg-slate-800 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none'
          type='text'
          name='search'
          placeholder='Search...'
          value={input}
          onChange={handleChange}
        />
        <button type='submit' className='absolute right-0 top-0 mt-3 mr-2'>
          <svg
            className='text-gray-400 h-4 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            width='512px'
            height='512px'>
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default NavbarSearch
