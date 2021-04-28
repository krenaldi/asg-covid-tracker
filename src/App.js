import { useState, useEffect, useContext } from 'react';
import { Header, Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './API';
import { useStoreContext } from './utils/context';

const App = props => {
  // const [ data, setData ] = useState({});
  // const [ country, setCountry ] = useState('')

  // useEffect(() => {
  //   const fetchAPI = async (country) => {
  //     setData(await fetchData(country));
  //     if(country) {
  //       setCountry({country})
  //     }
  //   }
  //   fetchAPI();
  // }, [setCountry])

  // const handleCountryChange = async (country) => {
  //   // fetch data
  //   const data = await fetchData(country);
  //   // console.log(fetchedData);
  //   // set state
  //   setData(data)
  //   setCountry(country)
  // }

    return (
      <div className={styles.container}>
        <Header />
        <CountryPicker  />
        <Cards  />
        {/* <Chart  /> */}
      </div>
    );
}

export default App;
