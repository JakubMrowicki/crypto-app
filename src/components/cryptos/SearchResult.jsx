import CryptoContext from '../../context/CryptoContext'
import { useContext } from 'react'

function SearchResult() {
  const { searchResults } = useContext(CryptoContext)
  if (searchResults === null) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <div className='bg-gray-100 h-screen'>
          <div className='container mx-auto flex-col'>
            {searchResults.coins.map((coin, idx) => (
              <li key={idx}>{coin.name}</li>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResult
