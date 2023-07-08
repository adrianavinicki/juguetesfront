import { Chart as ChartJS,
ArcElement,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale,
LineElement,
PointElement,
} from 'chart.js';
import {
    Box,
    Flex,
  } from '@chakra-ui/react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LineElement,
    LinearScale,
    ArcElement,
    PointElement,
    Tooltip,
    Legend
);

export default function PieChart(){

    const pieData = {
        labels: ['Open Orders', 'Closed Orders'],
        datasets: [{
            label: 'Poll',
            data: [2, 6],
            backgroundColor: ['black', 'white'],
            // borderColor: ['black', 'red'],
        }]
    }
    const barData = {
        labels: ['Autos', 'Muñecas', 'Construccion'],
        datasets: [{
            label: 'Category',
            data: [3, 6, 5],
            backgroundColor: ['black', 'white'],
            // borderColor: ['black', 'red'],
        }]
    }
    const lineData = {
        labels: ['January', 'February', 'March' ],
        datasets: [{
            label: 'Sales per Month',
            data: [3, 6, 4],
            backgroundColor: ['black', 'white'],
            fill: true,
            tension: 0.4,
            pointBorderColor: 'white',
            borderColor: ['white', 'red'],
        }]
    }

    const options = {

    }

    
    const optionsLine = {
        plugins: {
            legend: true
        },
        scales: {
            y: {}
        }
    }

    return(
        <div>
            <Box>
                <Flex>
                    <Box boxSize={'200px'}>
                        <Doughnut
                        data= {pieData}
                        options = {options}
                        ></Doughnut>
                    </Box>
                    <Box boxSize={'400px'}>
                        <Bar
                        data = {barData}
                        option = {options}
                        ></Bar>
                    </Box>
                    <Box boxSize={'400px'}>
                        <Line
                        data = {lineData}
                        options = {optionsLine}
                        ></Line>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}




