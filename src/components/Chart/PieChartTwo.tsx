import { useGetTagData } from '@/apis';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PieChartTwo = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '카테고리별 지출 비율',
      },
    },
  };

  const [isLoading, setIsLoading] = useState(true);
  const { data: tagData } = useGetTagData();

  useEffect(() => {
    if (tagData) setIsLoading(false);
  }, [tagData]);

  if (isLoading) return false;

  const label = Object.keys(tagData!.statistics);

  const data = {
    labels: label,
    datasets: [
      {
        label: '지출(원)',
        data: Object.values(tagData!.statistics)
          .map((item) => item.expenditure)
          .sort(),
        backgroundColor: Array.from(
          { length: Object.keys(tagData!.statistics).length },
          () =>
            '#' +
            Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .padStart(6, '0')
        ),
      },
    ],
  };

  return <Pie options={options} data={data} />;
};
export default PieChartTwo;
