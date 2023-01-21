import React from 'react';
import NVD3Chart from 'react-nvd3';



function getDatum(data) {
  let min = [],
    avg = [],
    max = [];
  // console.log(data)
  const len = data?data.length:0
  for (let i = 0; i < len; i++) {
    min.push({
      x: data[i].name,
      y: parseFloat(data[i].min)
    });
    avg.push({
      x: data[i].name,
      y: parseFloat(data[i].avg)
    });
    max.push({
      x: data[i].name,
      y: parseFloat(data[i].max) 
    });
  }
  if(len===0){
    min.push({
      x: 0,
      y: 0
    });
    avg.push({
      x: 0,
      y: 0
    });
    max.push({
      x: 0,
      y: 0
    });
  }
  return [
    {
      values: min,
      key: 'min',
      color: '#A389D4'
    },
    {
      values: avg,
      key: 'avg',
      color: '#04a9f5'
    },
    {
      values: max,
      key: 'max',
      color: '#1de9b6',
      area: true
    }
  ];
}

const MultiBarChart = (props) => {
  const data = getDatum(props.data);

  return <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.2} />;
};

export default MultiBarChart;
