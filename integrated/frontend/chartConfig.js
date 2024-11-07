// chartConfig.js
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

// Register necessary components globally
ChartJS.register(
  CategoryScale,   // For x-axis in bar charts
  LinearScale,     // For y-axis in bar charts
  BarElement,      // For bar chart elements
  ArcElement,      // For pie and doughnut chart elements
  Title,           // For title of the chart
  Tooltip,         // For tooltips
  Legend,          // For legend
  LineElement,     // For line chart elements (needed for points and lines)
  PointElement     // For points in line charts (needed for displaying points on lines)
);
