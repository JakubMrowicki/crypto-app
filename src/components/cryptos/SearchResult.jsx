import CryptoContext from '../../context/crypto/CryptoContext'
import { useContext } from 'react'

function SearchResult() {
  const { searched, loading } = useContext(CryptoContext)

  return (
    <div className='bg-slate-800 h-screen'>
      <div className='container mx-auto flex flex-col'>
        <div className='text-white p-8'>
          {loading 
          ? <h2 className='font-bold text-2xl'>Loading...</h2>
          : searched.coins.map((c) => (
            c.market_cap_rank && c.market_cap_rank <= 500
            ? <div className='flex flex-row items-center mb-2'>
                <img className='h-8 mr-2' src={c.large} alt="" />
                <h1 className='mr-2 font-light' key={c.id}>{c.name} ({c.symbol})</h1>
                <button className='bg-slate-700 text-white font-light mt-2 px-3 py-2 rounded-md text-sm'>Add to Watchlist</button>
              </div>
            : null
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult
