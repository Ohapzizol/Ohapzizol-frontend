import { useGetLatestData } from '@/apis';
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
import { useEffect, useState } from 'react';
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

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '최근 6주간 수익과 지출의 변화',
      },
    },
  };

  const labels = ['5주차', '4주차', '3주차', '2주차', '1주차', '이번주'];

  const [isLoading, setIsLoading] = useState(true);
  const { data: latestData } = useGetLatestData();

  useEffect(() => {
    if (latestData) setIsLoading(false);
  }, [latestData]);

  if (isLoading) return false;

  const data = {
    labels,
    datasets: [
      {
        label: '수입',
        data: Object.values(latestData!.statistics)
          .reverse()
          .map((item) => item.expenditure),
        backgroundColor: 'red',
        fill: false,
        tension: 0.1,
      },
      {
        label: '지출',
        data: Object.values(latestData!.statistics)
          .reverse()
          .map((item) => item.income),
        backgroundColor: 'blue',
        fill: false,
        tension: 0.1,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
export default LineChart;
