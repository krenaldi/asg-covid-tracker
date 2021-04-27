import {createContext, useContext, useReducer} from 'react';

export const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        data: [],
        country: ''
    })
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };