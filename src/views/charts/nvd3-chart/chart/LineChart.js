import React from 'react';
import NVD3Chart from 'react-nvd3';


function calculate_equation(y1,y2,y3){ 
  var a,b,c,d,e,f,g,h,i,j,k,l,denominatordelta,anumerator,bnumerator,cnumerator 
  a=0; 
  b=0; 
  c=1; 
  d=y1; 
  e=2500; 
  f=50; 
  g=1; 
  h=y2; 
  i=9801; 
  j=99; 
  k=1; 
  l=y3; 
  denominatordelta=(a * f * k) + (b * g * i) + (c * e * j) - (c * f * i) - (a * g * j) - (b * e * k) 
  anumerator=(d * f * k) + (b * g * l) + (c * h * j) - (c * f * l) - (d * g * j) - (b * h * k) 
  bnumerator=(a * h * k) + (d * g * i) + (c * e * l) - (c * h * i) - (a * g * l) - (d * e * k) 
  cnumerator=(a * f * l) + (b * h * i) + (d * e * j) - (d * f * i) - (a * h * j) - (b * e * l) 
  a=anumerator/denominatordelta 
  b=bnumerator/denominatordelta 
  c=cnumerator/denominatordelta 
  return [a,b,c]
} 


const colours =['#3ebfea','#04a9f5','#ff8a65','#1de9b6','#4C5667','#69CEC6','#a389d4',
'#FE8A7D','#BF0A30','#f4c22b','#f00fe1','#59e718','#7e8180','#5382ac','#ac0af5','#5ca37c']

const LineChart = (props) => {
  // const datam = getDatum();
  let arr=[]
  let date = (props.updatedDate)?props.updatedDate:"Today's data"
  for(let i=0;i<(props.data?props.data.length:0);i++){
    let coff=calculate_equation(props.data[i].min,props.data[i].avg,props.data[i].max)
    let temp=[]
    for(let j=0;j<100;j++){
      temp.push({
        y:coff[0]*j*j+coff[1]*j+coff[2],
        x:j
      })
    }
    arr.push({
      values:temp,
      key:props.data[i].name,
      color:colours[i],
    })
  }
  // console.log(datam)
  // console.log(arr)

  return (
    <React.Fragment>
      {React.createElement(NVD3Chart, {
        xAxis: {
          tickFormat: function (d) {
            return d;
          },
          axisLabel: date ///x axis label
        },
        yAxis: {
          axisLabel: 'Pollution Levels', //y axis label
          tickFormat: function (d) {
            return parseFloat(d).toFixed(2);
          }
        },
        type: 'lineChart',
        datum: arr,
        x: 'x',
        y: 'y',
        height: 300,
        renderEnd: function () {
          console.log('renderEnd');
        }
      })}
    </React.Fragment>
  );
};

export default LineChart;
