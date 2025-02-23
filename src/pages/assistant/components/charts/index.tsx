/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {

    const data = {
        labels: [
          'გადარიცხვები',
          'კომუნალურები',
          'სურსათი',
          'განაღდება თანხის',
          'ტრანსპორტი',
          'გართობა',
          'სხვადასხვა ხარჯები'
        ],
        datasets: [
          {
            data: [2, 12, 25, 10, 10, 10, 10],
            backgroundColor: [
              '#007bff', 
              '#28a745', 
              '#ff9800', 
              '#f44336', 
              '#9c27b0', 
              '#fdd835',
              '#9e9e9e' 
            ],
            borderWidth: 2,
            cutout: '60%',
          },
        ],
      };
    
      const options = {
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              font: { size: 14 },
              color: '#fff', 
            },
          },
          tooltip: {
            callbacks: {
              label: (context: any) => `${context.label}: ${context.parsed}%`,
            },
          },
        },
      };

  return (
    <div style={{ width: '400px', background: '#9e9e9e', borderRadius: '12px', padding: '20px', color: '#fff' }}>
      <h2 className='text-center pb-3'>Spending Trends</h2>
      <Doughnut data={data} options={options} height={300} width={300} />
    </div>
  )
}

export default Chart