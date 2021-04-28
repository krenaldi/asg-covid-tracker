import  { createContext, useState, useEffect } from 'react';
import { fetchData } from '../API';
import axios from "axios";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = (props) => {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([{}]);
    const [country, setCountry] = useState('');

    const url = 'https://covid19.mathdro.id/api';

    const fetchData = async (country) => {
        let countryUrl = url;

        if (country) {
            countryUrl = `${url}/countries/${country}`
        }

        try {
            const data = await axios.get(countryUrl);
            const { data: { confirmed, recovered, deaths, lastUpdate } } = data
            console.log(confirmed);
            setData([confirmed, recovered, deaths, lastUpdate]);
            if (country) {
                setCountry(country)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const fetchDailyData = async () => {
    //     try {
    //         const dailyData = await axios.get(`${url}/daily`);
    //         console.log(dailyData);

    //         const modifiedData = dailyData.map(data => ({
    //             confirmed: data.confirmed.total,
    //             deaths: data.deaths.total,
    //             date: data.reportDate
    //         }))

    //         return modifiedData;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const fetchAPI = async (country) => {
    //     setData(await fetchData(country));
    //     if (country) {
    //         setCountry(country)
    //     }
    // }

    const handleCountryChange = async (country) => {
        // fetch data
        const data = await fetchData(country);
        // console.log(fetchedData);
        // set state
        setData(data)
        setCountry(country)
    }

    useEffect(() => {
        fetchData(country);
    }, [])

    // useEffect(() => {
    //     fetchDailyData();
    // }, [])

    return <Provider value={{ data, country, fetchData, handleCountryChange }} {...props} />;
}

// const useStoreContext = () => {
//     return useContext(StoreContext);
// }

export { StoreProvider, StoreContext };
