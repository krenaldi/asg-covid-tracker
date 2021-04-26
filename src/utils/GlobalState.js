import {createContext} from 'react';

const CountryContext = createContext();

const CountryProvider = (props) => {
    return (
        <CountryContext.Provider value={"View COVID-19 data by either globally or by individual country"}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider;