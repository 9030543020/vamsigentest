"use client";
// frontend/pages/index.js

import React, { useState, useEffect } from 'react';
import TotalLikesChart from '../components/TotalLikesChart';
import UsageDurationChart from '../components/UsageDurationChart';
import '../chartConfig'; // Make sure to import chart configuration

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [totalLikesChartType, setTotalLikesChartType] = useState('Bar');
  const [usageDurationChartType, setUsageDurationChartType] = useState('Line');
  const [chartData, setChartData] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Fetch data function
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/social-media-data");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setChartData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData(); // Initial data fetch

    // Set interval to refresh data every 30 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (!chartData) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Social Media Dashboard</h1>
        <button onClick={toggleDarkMode} style={{ marginBottom: '20px' }}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
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
    </div>
  );
};

export default Dashboard;
