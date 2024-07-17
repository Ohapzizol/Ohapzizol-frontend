import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js / react-chartjs-2 시작하기',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 30, 20, 100, 33, 57],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Dataset 2',
      data: [80, 100, 130, 250, 90, 133, 157],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: false,
      tension: 0.1,
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};
export default LineChart;
