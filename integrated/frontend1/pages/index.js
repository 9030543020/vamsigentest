"use client";
// frontend/pages/index.js

import React, { useState, useEffect } from 'react';
import TotalLikesChart from '../components/TotalLikesChart';
import UsageDurationChart from '../components/UsageDurationChart';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [totalLikesChartType, setTotalLikesChartType] = useState('Bar');
  const [usageDurationChartType, setUsageDurationChartType] = useState('Line');
  const [chartData, setChartData] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/social-media-data");
      const result = await response.json();
      setChartData(result.data);
    };
    fetchData();
  }, []);

  if (!chartData) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <h1>Social Media Dashboard</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>

      {/* Chart dropdowns and components */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <label>Total Likes Chart Type:</label>
          <select onChange={(e) => setTotalLikesChartType(e.target.value)}>
            <option value="Bar">Bar</option>
            <option value="Pie">Pie</option>
            <option value="Doughnut">Doughnut</option>
          </select>
          <TotalLikesChart chartType={totalLikesChartType} data={chartData} />
        </div>
        <div>
          <label>Usage Duration Chart Type:</label>
          <select onChange={(e) => setUsageDurationChartType(e.target.value)}>
            <option value="Line">Line</option>
            <option value="Pie">Pie</option>
            <option value="Doughnut">Doughnut</option>
          </select>
          <UsageDurationChart chartType={usageDurationChartType} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
