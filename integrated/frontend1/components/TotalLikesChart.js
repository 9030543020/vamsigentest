// frontend/components/TotalLikesChart.js

import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

const TotalLikesChart = ({ chartType, data }) => {
  const chartData = {
    labels: data.map((item) => item.Country),
    datasets: [
      {
        label: 'Total Likes by Country',
        data: data.map((item) => item.TotalLikes),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 50, // Set scale to 50
        },
      },
    },
  };

  const ChartComponent = chartType === 'Pie' ? Pie : chartType === 'Doughnut' ? Doughnut : Bar;

  return <ChartComponent data={chartData} options={chartOptions} />;
};

export default TotalLikesChart;
