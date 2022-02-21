import axios from "axios"

const coingecko = 'https://api.coingecko.com/api/v3'

export const getFeatured = async () => {
  const featured = await axios.get(
    `${coingecko}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false`
  )
  
  return featured.data
}

export const searchCryptos = async (text) => {
  const searched = await axios.get(
    `${coingecko}/search?query=${text.toLowerCase()}`
  )

  return searched.data
}