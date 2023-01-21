import React,{useEffect,useState} from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';


import LineChart from './chart/LineChart';
import BarDiscreteChart from './chart/BarDiscreteChart';
import PieDonutChart from './chart/PieDonutChart';
import PieBasicChart from './chart/PieBasicChart';
import MultiBarChart from './chart/MultiBarChart';
// import Comparison from './Comparison.js';

import axios from 'axios';

// import StateNames from "../../../data/StatesNames"
let a

let states = NaN
let stateToCity = NaN
let cityToStation = NaN
let stationToPollutants = NaN


const Nvd3Chart = () => {

  const [stateName,setStateName] = useState("Loading...")
  const [cityName,setCityName] = useState("Select State First")
  const [stationName,setStationName] = useState("Select State First")
  // const [pollutantName,setPollutantName] = useState("Select State First")
  const [date,setDate] = useState("Today's Date")

  useEffect(()=>{
    axios.get("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000010dab50cccbca40aa7b5b3d059eba9732&format=json&limit=2166#/"
    ).then(res=>{
      let  data = (res.data.records)
      setDate(res.data.updated_date.slice(0,10))
      //console.log(res.data.updated_date.slice(0,10))
      //console.log(data)
      data.map((obj)=>{
        if(states.length===0){
          states.push(obj.state)
          
          // stateToCity[states[states.length-1]]=[]
          // stateToCity[states[states.length-1]].push(obj.city)
          stateToCity[obj.state]=[]
          stateToCity[obj.state].push(obj.city)
          // cityToStation[ (stateToCity[states[states.length-1]][(stateToCity[states[states.length-1]]).length-1]) ] = []
          // cityToStation[ (stateToCity[states[states.length-1]][(stateToCity[states[states.length-1]]).length-1]) ].push(obj.station)
          cityToStation[obj.city] = []
          cityToStation[obj.city].push(obj.station)

          stationToPollutants[obj.station]=[]
          stationToPollutants[obj.station].push(
            {
              "name" : obj.pollutant_id,
              "min" : obj.pollutant_min,
              "max" : obj.pollutant_max,
              "avg" : obj.pollutant_avg
            },
          )
          
          // stationPollutionLevels[obj.station]=[]
          // stationPollutionLevels[obj.station].push(
          //   obj.pollutant_id = {
          //     "min" : obj.pollutant_min,
          //     "min" : obj.pollutant_min,
          //     "min" : obj.pollutant_min
          //   },
          // )
        }else if(states[states.length-1]!==obj.state){
          states.push(obj.state)
          // stateToCity[states[states.length-1]]=[]
          // stateToCity[states[states.length-1]].push(obj.city)
          stateToCity[obj.state]=[]
          stateToCity[obj.state].push(obj.city)
          // cityToStation[ (stateToCity[states[states.length-1]][(stateToCity[states[states.length-1]]).length-1]) ] = []
          // cityToStation[ (stateToCity[states[states.length-1]][(stateToCity[states[states.length-1]]).length-1]) ].push(obj.station)
          cityToStation[obj.city] = []
          cityToStation[obj.city].push(obj.station)

          stationToPollutants[obj.station]=[]
          stationToPollutants[obj.station].push(
            {
              "name" : obj.pollutant_id,
              "min" : obj.pollutant_min,
              "max" : obj.pollutant_max,
              "avg" : obj.pollutant_avg
            },
          )
          
        }else if(stateToCity[obj.state][(stateToCity[obj.state]).length-1]!==obj.city){
                 //elseif(stateToCity[states[states.length-1]][(stateToCity[states[states.length-1]]).length-1]!==obj.city
          // stateToCity[states[states.length-1]].push(obj.city)
          stateToCity[obj.state].push(obj.city)

          cityToStation[obj.city] = []
          cityToStation[obj.city].push(obj.station)

          stationToPollutants[obj.station]=[]
          stationToPollutants[obj.station].push(
            {
              "name" : obj.pollutant_id,
              "min" : obj.pollutant_min,
              "max" : obj.pollutant_max,
              "avg" : obj.pollutant_avg
            }
          )

        }else if(cityToStation[obj.city][(cityToStation[obj.city]).length-1]!==obj.station){
          cityToStation[obj.city].push(obj.station)

          stationToPollutants[obj.station]=[]
          stationToPollutants[obj.station].push(
            {
              "name" : obj.pollutant_id,
              "min" : obj.pollutant_min,
              "max" : obj.pollutant_max,
              "avg" : obj.pollutant_avg
            }
          )
                 
        }else if(stationToPollutants[obj.station][(stationToPollutants[obj.station]).length-1].name!==obj.pollutant_id){
          stationToPollutants[obj.station].push(
            {
              "name" : obj.pollutant_id,
              "min" : obj.pollutant_min,
              "max" : obj.pollutant_max,
              "avg" : obj.pollutant_avg
            }
          )
        }
        return 0;
      })
      //console.log(states)
      setStateName("Andhra_Pradesh")
      setCityName(stateToCity["Andhra_Pradesh"][0])
      setStationName(cityToStation[stateToCity["Andhra_Pradesh"][0]][0])
      // setPollutantName(stationToPollutants[cityToStation[stateToCity["Andhra_Pradesh"][0]][0]][0].name)
      // console.log(stateToCity)
      // console.log(cityToStation)
      // console.log("dddddddddd")
      // console.log(stationToPollutants["Secretariat, Amaravati - APPCB"])
      // console.log("22")
      
    })
  },[])
  

  const stateSelectHandler = (event) =>{
    // console.log(event.target.value)
    setStateName(event.target.value)
    setCityName(stateToCity[event.target.value][0])
    setStationName(cityToStation[stateToCity[event.target.value][0]][0])
    // setPollutantName(stationToPollutants[cityToStation[stateToCity[event.target.value][0]][0]][0].name)
  }
  const citySelectHandler = (event) =>{
    // console.log(event.target.value)
    setCityName(event.target.value)
    setStationName(cityToStation[cityName][0])
    // setPollutantName(stationToPollutants[cityToStation[cityName][0]][0].name)

  }
  const stationSelectHandler = (event) =>{
    // console.log(event.target.value)
    setStationName(event.target.value)
    // setPollutantName(stationToPollutants[stationName][0].name)
  }
  // const pollutantSelectHandler = (event) =>{
  //   // console.log(event.target.value)
  //   setPollutantName(event.target.value)
  // }
  

  return (
    <React.Fragment>
      <Row className="btn-page">
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select State</Form.Label>
              <Form.Control as="select" onChange={stateSelectHandler} value={stateName}>
                {states.map((names,id)=>{
                  return(
                    <option key={"states "+id}>{names}</option>
                  )
                })}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select city</Form.Label>
              <Form.Control as="select" onChange={citySelectHandler} value={cityName}>
                {stateToCity[stateName]?stateToCity[stateName].map((names,id)=>{
                    return(
                      <option key={"city "+id}>{names}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Station/Area</Form.Label>
              <Form.Control as="select" onChange={stationSelectHandler} value={stationName}>
                {cityToStation[cityName]?cityToStation[cityName].map((names,id)=>{
                    return(
                      <option key={"Station "+id}>{names}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        {/* <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select pollutant</Form.Label>
              <Form.Control as="select" onChange={pollutantSelectHandler} value={pollutantName}>
                {stationToPollutants[stationName]?stationToPollutants[stationName].map((obj,id)=>{
                    // console.log(obj["name"])
                    return(
                      <option key={"polllutant "+id}>{obj.name}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col> */}
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart data={stationToPollutants[stationName]} updatedDate={date}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5" >Discrete Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarDiscreteChart data={stationToPollutants[stationName]} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Stacked/Grouped Multi-Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <MultiBarChart data={stationToPollutants[stationName]}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Pie Basic Chart</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieBasicChart data={stationToPollutants[stationName]}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Donut Chart</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieDonutChart data={stationToPollutants[stationName]} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Nvd3Chart;


// let states=[]
// let stateToCity={}
// let cityToStation={}
// let stationToPollutants={}

// export const Information_maps = () => {
  
//   return {
//     states,
//     stateToCity,
//     cityToStation,
//     stationToPollutants
//   }
// }
export const STATES = states
export const STATE_TO_CITY = stateToCity
export const CITY_TO_STATION = cityToStation
export const STATION_TO_POLLUTANTS = stationToPollutants
