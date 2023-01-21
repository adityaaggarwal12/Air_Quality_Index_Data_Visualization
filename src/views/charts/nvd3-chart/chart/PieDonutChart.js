import React from 'react';
import NVD3Chart from 'react-nvd3';

// const datum = [
//   { key: 'One', y: 29, color: '#ff8a65' },
//   { key: 'Two', y: 0, color: '#f4c22b' },
//   { key: 'Three', y: 32, color: '#04a9f5' },
//   { key: 'Four', y: 196, color: '#3ebfea' },
//   { key: 'Five', y: 2, color: '#4F5467' },
//   { key: 'Six', y: 98, color: '#1de9b6' },
//   { key: 'Seven', y: 13, color: '#a389d4' },
//   { key: 'Eight', y: 5, color: '#FE8A7D' }
// ];
const colours =['#3ebfea','#04a9f5','#ff8a65','#1de9b6','#4C5667','#69CEC6','#a389d4',
'#FE8A7D','#BF0A30','#f4c22b','#f00fe1','#59e718','#7e8180','#5382ac','#ac0af5','#5ca37c']

const PieDonutChart = (props) => {

  let chartValues= [
    props.data?props.data.map((item, index) => {
      return {
        key: item.name,
        y: parseInt(item.avg),
        color: colours[index]
      }
    }):[{ key: 'One', y: 29, color: '#ff8a65' }]
  ]

  return <NVD3Chart id="chart" height={300} type="pieChart" datum={chartValues[0]} x="key" y="y" donut labelType="percent" />;
};

export default PieDonutChart;
