import { useEffect, useContext } from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import CryptoContext from '../../context/CryptoContext';
import { getFeatured } from '../../context/CryptoActions';

function FeaturedCryptos() {
    const { featured, loading, dispatch } = useContext(CryptoContext)

    useEffect(() => {
      dispatch({type: 'SET_LOADING'})
      const getFeaturedData = async () => {
        const featuredData = await getFeatured()
        dispatch({type: 'GET_FEATURED', payload: featuredData})
      }
      getFeaturedData()
    }, [])

    if (loading) return null

    return (
    <div className='bg-gray-200 h-screen'>
      <div className='container mx-auto flex-col'>
          <div className='text-start p-8'>
            <h2 className='font-bold text-2xl'>Top Cryptos</h2>
          </div>
          <div>
              <div className='bg-white grid lg:grid-cols-4 sm:grid-cols-2 border-2 pt-4'>
                  {featured.map((c) => (
                      <div key={c.id} className='flex-col border-b-2 sm:border-0 py-8 items-center justify-center text-center'>
                        <img className='h-40 m-auto' src={c.image} alt="" />
                        <h2 className='font-bold pt-4 text-lg'>{c.name}</h2>
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
    </div>
    )
}

export default FeaturedCryptos;
