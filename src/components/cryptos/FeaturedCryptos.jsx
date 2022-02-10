import { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import axios from 'axios';

function FeaturedCryptos() {

    const [data, setData] = useState(null)

    const coingecko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(coingecko)
            setData(response.data)
        }
        fetchData()
    }, [])

    if (!data) return null

    return (
      <div className='flex-col'>
          <div className='text-center mt-4'>
              <h2 className='font-bold text-xl'>Top Cryptos</h2>
          </div>
          <div className='mt-16'>
              <div className='grid grid-cols-4'>
                  {data.map((c) => (
                      <div className='flex-col items-center justify-center text-center'>
                        <img className='h-48 m-auto' src={c.image} alt="" />
                        <h2 className='pt-4 font-bold text-lg'>{c.name}</h2>
                        <p>${c.current_price.toLocaleString()}</p>
                        {c.price_change_percentage_24h < 0 ? (
                            <div className='flex justify-center'>
                                <span className='flex red'><FiArrowDownRight />{c.price_change_percentage_24h.toFixed(2)}</span>
                            </div>
                        ) : (
                            <div className='flex justify-center'>
                                <span className='flex green'><FiArrowUpRight />{c.price_change_percentage_24h.toFixed(2)}</span>
                            </div>
                        )}
                      </div>
                  ))}
              </div>
          </div>
          <div className='text-center mt-8'>
            <button className='font-bold text-xl'>See more...</button>
          </div>
      </div>
    )
}

export default FeaturedCryptos;
