import styles from './Header.module.css';
import { useContext } from 'react';
import {IntroContext} from '../../utils/GlobalState';

const Header = () => {
    const context = useContext(IntroContext);
    console.log(context);
    return (
        <header className={styles.header}>
            COVID TRACKER
            <p>{context}</p>
        </header>
    )
}

export default Header;
