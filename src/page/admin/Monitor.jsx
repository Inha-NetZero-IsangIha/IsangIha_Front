import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Monitor = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'EU',
        backgroundColor: '#4CAF50',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
      {
        label: 'USD',
        backgroundColor: '#8BC34A',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
      },
    ],
  };

  const pieData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B'],
        hoverBackgroundColor: ['#388E3C', '#689F38', '#AFB42B', '#FBC02D'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Progress'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#4CAF50', '#E0E0E0'],
        hoverBackgroundColor: ['#388E3C', '#BDBDBD'],
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 14 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'A',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#4CAF50',
        data: Array.from({ length: 14 }, () => Math.floor(Math.random() * 6000)),
        fill: true,
      },
      {
        label: 'B',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: '#8BC34A',
        data: Array.from({ length: 14 }, () => Math.floor(Math.random() * 6000)),
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      
      <div style={{gap: '50px'}} className="main-content direction-column">
        <div className="chart-container">
          <div className="chart-header">
          </div>
          <Bar data={barData} />
        </div>

        <div className="statistics direction-row">
          <div className="pie-chart">
            <h3>Statistics</h3>
            <Pie data={pieData} />
          </div>
          <div className="progress-circle">
            <h3>50%</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
        
        <div className="infographic">
          <h2>Infographic</h2>
          <div className="area-chart">
            <Line data={lineData} />
          </div>
        </div>
        
        <div className="overview">
          <h2>Overview</h2>
          <div className="line-chart">
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;