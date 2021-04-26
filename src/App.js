import { Component } from 'react'
import { Header, Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './API'

class App extends Component {
  // const [ data, setData ] = useState({});
  // const [ country, setCountry ] = useState('')
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  // useEffect(() => {
  //   const fetchAPI = async (country) => {
  //     setData(await fetchData(country));
  //     if(country) {
  //       setCountry({country})
  //     }
  //   }
  //   fetchAPI();
  // }, [setCountry])

  handleCountryChange = async (country) => {
    // fetch data
    const data = await fetchData(country);
    // console.log(fetchedData);
    // set state
    this.setState({ data, country: country })

  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <CountryPicker handleCountryChange={this.handleCountryChange}  />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );

  }
}

export default App;
