import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const SpiderGraph = () => {

    const data = {
        labels: ['Intelligence', 'Wisdom', 'Intuition', 'Neuroticism', 'Charisma', '???'],
        backgroundColor: 'white',
        datasets: [
          {
            label: "Stats",
            data: [9, 2, 4, 7, 10, 6, 8],
            backgroundColor: 'rgba(4, 5, 123, 0.2)',
            borderColor: 'rgba(125, 99, 132, 1)',
            borderWidth: 1, 
          },
          {
            label: "Boundaries",
            data: [10, 10, 10, 10, 10, 10, 10],
            backgroundColor: 'rgba(255, 255, 255)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

  return (
    <div className='my-auto'>
        <Radar data={data} />
    </div>
  )
}

export default SpiderGraph