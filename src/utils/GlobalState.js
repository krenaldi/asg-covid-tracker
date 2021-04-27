import {createContext} from 'react';

export const IntroContext = createContext();
export const DataContext = createContext();

const IntroProvider = (props) => {
    return (
        <IntroContext.Provider value={"View COVID-19 data by either globally or by individual country"}>
            {props.children}
        </IntroContext.Provider>
    )
}

const DataProvider = (props) => {

}

export const useGetState = () => {
    const { state } = useContext(DataContext);

    return state;
}

export default IntroProvider;