import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const apiData = {
    carbonEmission: {
        CUP_MINI: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_MINI: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TUMBLR_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TUMBLR_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TRAY_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TRAY_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
    },
    cost: {
        CUP_MINI: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        CUP_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_MINI: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        PLATE_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TUMBLR_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TUMBLR_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TRAY_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        TRAY_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_SMALL: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_MEDIUM: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
        BOX_LARGE: {singleUse: Math.floor(Math.random() * 50 + 50), multiUse: Math.floor(Math.random() * 30)},
    }
}

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