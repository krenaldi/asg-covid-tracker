import styles from './Header.module.css';
import { useContext } from 'react';

const Header = () => {
    // const context = useContext(IntroContext);

    return (
        <header className={styles.header}>
            COVID TRACKER
            {/* <p>{context}</p> */}
        </header>
    )
}

export default Header;
