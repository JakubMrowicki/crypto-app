import { createContext } from "react";
import axios from "axios";

const CryptoContext = createContext()

export const CryptoProvider = ({children}) => {

    const coingecko = 'https://api.coingecko.com/api/v3/coins'

    const searchCryptos = async (text) => {
        const response = await axios.get(`${coingecko}/${text}`)
        return response.data
    }

    return <CryptoContext.Provider value={{
        coingecko,
        searchCryptos
    }}>
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext