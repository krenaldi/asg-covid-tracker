import { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './API'

function App() {
  const [ data, setData ] = useState({});

  useEffect(async () => {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    setData(fetchedData)
  }, [])


  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
