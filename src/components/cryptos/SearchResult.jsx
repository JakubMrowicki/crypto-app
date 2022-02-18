import CryptoContext from '../../context/CryptoContext'
import { useContext } from 'react'

function SearchResult() {
  const { searchResults, isLoading } = useContext(CryptoContext)

  return (
    <div className='bg-gray-200 h-screen'>
      <div className='container mx-auto flex-col'>
        <div className='text-start p-8'>
          {isLoading 
          ? <h2 className='font-bold text-2xl'>No results</h2>
          : searchResults.coins.map((coin) => (
              coin.market_cap_rank && coin.market_cap_rank <= 500
              ? <h1 key={coin.id}>{coin.name} ({coin.symbol})</h1>
              : null
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult
