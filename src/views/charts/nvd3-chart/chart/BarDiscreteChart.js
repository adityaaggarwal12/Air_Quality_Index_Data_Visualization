import React from 'react';
import NVD3Chart from 'react-nvd3';

// const datum = [
//   {
//     key: 'Cumulative Return',
//     values: [
//       {
//         label: 'A',
//         value: -29.765957771107,
//         color: '#3ebfea'
//       },
//       {
//         label: 'B',
//         value: 10,
//         color: '#04a9f5'
//       },
//       {
//         label: 'C',
//         value: 32.807804682612,
//         color: '#ff8a65'
//       },
//       {
//         label: 'D',
//         value: 196.45946739256,
//         color: '#1de9b6'
//       },
//       {
//         label: 'E',
//         value: 0.25434030906893,
//         color: '#4C5667'
//       },
//       {
//         label: 'F',
//         value: -98.079782601442,
//         color: '#69CEC6'
//       },
//       {
//         label: 'G',
//         value: -13.925743130903,
//         color: '#a389d4'
//       },
//       {
//         label: 'H',
//         value: -5.1387322875705,
//         color: '#FE8A7D'
//       }
//     ]
//   }
// ];

const colours =['#3ebfea','#04a9f5','#ff8a65','#1de9b6','#4C5667','#69CEC6','#a389d4',
'#FE8A7D','#BF0A30','#f4c22b','#f00fe1','#59e718','#7e8180','#5382ac','#ac0af5','#5ca37c']

const BarDiscreteChart = (props) => {
  // console.log(props.data)
  // console.log("77")
  // console.log("hello")
  let chartValues= [
    props.data?props.data.map((item, index) => {
      return {
        label: item.name,
        value: parseInt(item.avg),
        color: colours[index]
      }
    }):[{ label: 'G', value: -13.925743130903, color: '#a389d4'},{label: 'H',value: -5.1387322875705,color: '#FE8A7D'}]
  ]
  // console.log(chartValues[0])
  // console.log(datum[0].values)
  let chartData =[
    {
      key: 'Pollutants Data',
      values: chartValues[0]
    }
  ]

  return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={chartData} x="label" y="value" height={300} showValues />;
};

export default BarDiscreteChart;
