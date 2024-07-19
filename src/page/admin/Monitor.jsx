import apiData from './mocker'
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const getTotalCost = type => {
    let total = 0;

    Object.values(apiData.cost).forEach(cost => {
        total += cost[type];
    })

    return total;
}

const Monitor = () => {
  const barData = {
    labels: Object.keys(apiData.carbonEmission),
    datasets: [
      {
        label: '일회용품',
        backgroundColor: '#8BC34A',
        data: Object.values(apiData.carbonEmission).map(emission => emission.singleUse),
      },
      {
        label: '다회용품',
        backgroundColor: '#388E3C',
        data: Object.values(apiData.carbonEmission).map(emission => emission.multiUse),
      },
    ],
  };

  const pieData = {
    labels: ['다회용품', '일회용품'],
    datasets: [
      {
        data: [getTotalCost('multiUse'), getTotalCost('singleUse')],
        backgroundColor: ['#4CAF50', '#8BC34A'],
        hoverBackgroundColor: ['#388E3C', '#BDBDBD'],
      },
    ],
  };

  const doughnutData = {
    labels: ['다회용품'],
    datasets: [
      {
        data: [getTotalCost('multiUse'), getTotalCost('singleUse')],
        backgroundColor: ['#8BC34A', '#E0E0E0'],
        hoverBackgroundColor: ['#388E3C', '#BDBDBD'],
      },
    ],
  };

  const lineData = {
    labels: Object.keys(apiData.usage),
    datasets: [
      {
        label: '사용량',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'lightblue',
        data: Object.values(apiData.usage).map(usage => usage.use),
        fill: true,
      },
      {
        label: '반환량',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: '#8BC34A',
        data: Object.values(apiData.usage).map(usage => usage.return),
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div style={{gap: '50px'}} className="main-content direction-column">
        <div className="chart-container">
          <div className="chart-header">
            <h3>탄소배출량(g)</h3>
          </div>
          <Bar data={barData} />
        </div>

        <h2>비용 비교</h2>
        <div className="statistics direction-row center-sender">
          <div className="pie-chart">
            <Pie data={pieData} />
          </div>

          {/* <div className="progress-circle">
            <h3>다회용품</h3>
            <Doughnut data={doughnutData} />
          </div> */}
        </div>
        
        <div className="infographic">
          <h2>사용량 / 반환량</h2>
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