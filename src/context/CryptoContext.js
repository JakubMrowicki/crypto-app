import { createContext, useState } from 'react'
import axios from 'axios'

const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [featured, setFeatured] = useState(null)
  const [searchResults, setSearchResults] = useState(null)

  const coingecko = 'https://api.coingecko.com/api/v3'

  const getFeatured = async () => {
    const response = await axios.get(
      `${coingecko}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false`
    )
    setFeatured(response.data)
    setIsLoading(false)
  }

  const searchCryptos = async (text) => {
    const response = await axios.get(
      `${coingecko}/search?query=${text.toLowerCase()}`
    )
    console.log(response.data.coins)
    setSearchResults(response.data)
    setIsLoading(false)
  }

  return (
    <CryptoContext.Provider
      value={{
        isLoading,
        featured,
        getFeatured,
        searchResults,
        searchCryptos,
      }}>
      {children}
    </CryptoContext.Provider>
  )
}

export default CryptoContext
