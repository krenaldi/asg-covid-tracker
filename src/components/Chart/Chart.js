import {useState, useEffect} from 'react';
import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData[0]
            ? (
                <Line
                    data={{
                        labels: '',
                        datasets: [{}, {}],
                    }}
                />
            ) : null
    )

    return (
        <div>
            <h1>Chart</h1>
        </div>
    )
}

export default Chart
