import { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import axios from 'axios';

function FeaturedCryptos() {

    const [data, setData] = useState(null)

    const coingecko = "https://api.coingecko.com/api/v3/coins"

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${coingecko}/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false`)
            setData(response.data)
        }
        fetchData()
    }, [])

    if (!data) return null

    return (
    <div className='bg-gray-100 h-screen'>
      <div className='container mx-auto flex-col'>
          <div className='text-start p-8'>
              <h2 className='font-bold text-2xl'>Top Cryptos</h2>
          </div>
          <div className=''>
              <div className='bg-white grid lg:grid-cols-4 sm:grid-cols-2 border-2 pt-4'>
                  {data.map((c) => (
                      <div className='flex-col border-b-2 sm:border-0 py-8 items-center justify-center text-center'>
                        <img className='h-48 m-auto' src={c.image} alt="" />
                        <h2 className='font-bold text-lg'>{c.name}</h2>
                        <p>${c.current_price.toLocaleString()}</p>
                        {c.price_change_percentage_24h < 0 ? (
                            <div className='flex justify-center'>
                                <span className='flex font-bold red'><FiArrowDownRight />{c.price_change_percentage_24h.toFixed(2)}</span>
                            </div>
                        ) : (
                            <div className='flex justify-center'>
                                <span className='font-bold flex green'><FiArrowUpRight />{c.price_change_percentage_24h.toFixed(2)}</span>
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
    </div>
    )
}

export default FeaturedCryptos;
