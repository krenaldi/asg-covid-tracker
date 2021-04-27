import  { createContext, useState, useEffect } from 'react';
import { fetchData } from '../API'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = (props) => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');

    const handleCountryChange = async (country) => {
        // fetch data
        const data = await fetchData(country);
        // console.log(fetchedData);
        // set state
        setData(data)
        setCountry(country)
    }

    useEffect(() => {
        const fetchAPI = async (country) => {
            setData(await fetchData(country));
            if (country) {
                setCountry({ country })
            }
        }
        fetchAPI();
    }, [setCountry])

    return <Provider value={{ data, country, handleCountryChange }} {...props} />;
}

// const useStoreContext = () => {
//     return useContext(StoreContext);
// }

export { StoreProvider, StoreContext };
