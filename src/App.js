import { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './API'

function App() {
  const [ data, setData ] = useState({});
  const [ country, setCountry ] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData())
    }
    fetchAPI();
  }, [])

  const handleCountryChange = async (country) => {
    // fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    // set state
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
}

export default App;
