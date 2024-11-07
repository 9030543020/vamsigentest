// frontend/components/UsageDurationChart.js

import React from 'react';
import { Line, Pie, Doughnut } from 'react-chartjs-2';

const UsageDurationChart = ({ chartType, data }) => {
  const chartData = {
    labels: data.map((item) => item.Country),
    datasets: [
      {
        label: 'Usage Duration (hours)',
        data: data.map((item) => item.UsageDuration),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
        borderColor: '#36A2EB',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const ChartComponent = chartType === 'Pie' ? Pie : chartType === 'Doughnut' ? Doughnut : Line;

  return <ChartComponent data={chartData} />;
};

export default UsageDurationChart;
