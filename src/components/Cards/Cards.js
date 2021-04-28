import  { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CardComponent from './Card/Card';
import { StoreContext } from '../../utils/context'

const Cards = () => {
    const context = useContext(StoreContext);
    console.log(context);
    const { data, fetchData, country } = context;
    console.log(data[0].value);
    // if (!data.data.confirmed) {
    //     return 'Loading...'
    // }

    // useEffect(() => {
    //     fetchData(country);
    // }, [])
    // console.log(data.data.confirmed)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* <CardComponent
                    className={styles.infected}
                    cardTitle="Infected"
                    value={data.confirmed.value}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of active COVID-19 cases"
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={data.recovered.value}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19"
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={data.deaths.value}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19"
                /> */}

            </Grid>
        </div>
    )
}

export default Cards;
