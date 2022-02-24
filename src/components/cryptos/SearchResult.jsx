import CryptoContext from '../../context/crypto/CryptoContext'
import { useContext } from 'react'

function SearchResult() {
  const { searched, loading } = useContext(CryptoContext)

  return (
    <div className='bg-slate-800 h-screen'>
      <div className='container mx-auto flex-col'>
        <div className='text-start text-white p-8'>
          {loading 
          ? <h2 className='font-bold text-2xl'>Loading...</h2>
          : searched.coins.map((coin) => (
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
