import React,{useEffect,useState} from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';


import LineChart from './chart/LineChart';
import BarDiscreteChart from './chart/BarDiscreteChart';
import PieDonutChart from './chart/PieDonutChart';
import PieBasicChart from './chart/PieBasicChart';
import MultiBarChart from './chart/MultiBarChart';

// import STATES from './index.js';
import Information_maps from './DATA.js';


// let states=[]
// let stateToCity={}
// let cityToStation={}
// let stationToPollutants={}

let a

let states = NaN
let stateToCity = NaN
let cityToStation = NaN
let stationToPollutants = NaN
let pollutants = NaN

// a = Information_maps()
// states = a[0]
// stateToCity = a[1]
// cityToStation = a[2]
// stationToPollutants = a[3]

const Comparison = () => {
  // First Location
  const [firstStateName,setFirstState] = useState("Loading...")
  const [firstCityName,setFirstCityName] = useState("Select State First")
  const [firstStationName,setFirstStationName] = useState("Select State First")
  // Second Location
  const [secondStateName,setSecondState] = useState("Loading...")
  const [secondCityName,setSecondCityName] = useState("Select State First")
  const [secondStationName,setSecondStationName] = useState("Select State First")
  // Third Location
  const [thirdStateName,setThirdState] = useState("Loading...")
  const [thirdCityName,setThirdCityName] = useState("Select State First")
  const [thirdStationName,setThirdStationName] = useState("Select State First")

  // pollutant 
  const [pollutantName,setPollutantName] = useState("Select State First")
  const [date,setDate] = useState("Today's Date")

  useEffect(()=>{
    a = Information_maps()
    a.then((data)=>{
      // console.log(data)
      states = data[0]
      stateToCity = data[1]
      cityToStation = data[2]
      stationToPollutants = data[3]
      // console.log(states)
      // console.log(stateToCity)
      // console.log(cityToStation)
      // console.log(stationToPollutants)
      setFirstState("Andhra_Pradesh")
      setFirstCityName(stateToCity["Andhra_Pradesh"][0])
      setFirstStationName(cityToStation[stateToCity["Andhra_Pradesh"][0]][0])
      //Second
      setSecondState("Andhra_Pradesh")
      setSecondCityName(stateToCity["Andhra_Pradesh"][0])
      setSecondStationName(cityToStation[stateToCity["Andhra_Pradesh"][0]][0])
      //Third
      setThirdState("Andhra_Pradesh")
      setThirdCityName(stateToCity["Andhra_Pradesh"][0])
      setThirdStationName(cityToStation[stateToCity["Andhra_Pradesh"][0]][0])

      setDate(data[4].slice(0,10))
      // pollutants = []
      // for (let i = 0; i < stationToPollutants[firstStationName]; i++) {
      //   let name = stationToPollutants[firstStationName]["name"]
      //   let second = false
      //   let third = false
      //   for(let j = 0; j < stationToPollutants[secondStationName]; j++){
      //     if(name === stationToPollutants[secondStationName]["name"]){
      //       second = true
      //       break
      //     }
      //   }
      //   for(let j = 0; j < stationToPollutants[thirdStationName]; j++){
      //     if(name === stationToPollutants[thirdStationName]["name"]){
      //       third = true
      //       break
      //     }
      //   }
      //   if(second && third){
      //     pollutants.push(name)
      //   }
      // }

    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const updatePollutantsArray = () =>{
    pollutants = []
    for (let i = 0; i < stationToPollutants[firstStationName].length; i++) {
      let name = stationToPollutants[firstStationName][i]["name"]
      // if(name == undefined){
      //   console.log(stationToPollutants[firstStationName])
      //   break
      // }else{
      //   console.log(name)
      // }
      let second = false
      let third = false
      for(let j = 0; j < stationToPollutants[secondStationName].length; j++){
        if(name == stationToPollutants[secondStationName][i]["name"]){
          // console.log(name)
          second = true
          break
        }
      }
      for(let j = 0; j < stationToPollutants[thirdStationName].length; j++){
        if(name == stationToPollutants[thirdStationName][i]["name"]){
          // console.log(name)
          third = true
          break
        }
      }
      if(second && third){
        pollutants.push(name)
      }
    }
    // console.log(stationToPollutants[firstStationName])
    // console.log(stationToPollutants[secondStationName])
    // console.log(stationToPollutants[thirdStationName])
    console.log(pollutants)
  }

  //First
  const firstStateSelectHandler = (event) =>{
    setFirstState(event.target.value)
    setFirstCityName(stateToCity[event.target.value][0])
    setFirstStationName(cityToStation[stateToCity[event.target.value][0]][0])
    updatePollutantsArray()
  }
  const firstCitySelectHandler = (event) =>{
    setFirstCityName(event.target.value)
    setFirstStationName(cityToStation[firstCityName][0])
    updatePollutantsArray()
  }
  const firstStationSelectHandler = (event) =>{
    setFirstStationName(event.target.value)
    updatePollutantsArray()
  }

  //Second
  const secondStateSelectHandler = (event) =>{
    setSecondState(event.target.value)
    setSecondCityName(stateToCity[event.target.value][0])
    setSecondStationName(cityToStation[stateToCity[event.target.value][0]][0])
    updatePollutantsArray()
  }
  const secondCitySelectHandler = (event) =>{
    setSecondCityName(event.target.value)
    setSecondStationName(cityToStation[firstCityName][0])
    updatePollutantsArray()
  }
  const secondStationSelectHandler = (event) =>{
    setSecondStationName(event.target.value)
    updatePollutantsArray()
  }

  //Third

  const thirdStateSelectHandler = (event) =>{
    setThirdState(event.target.value)
    setThirdCityName(stateToCity[event.target.value][0])
    setThirdStationName(cityToStation[stateToCity[event.target.value][0]][0])
    updatePollutantsArray()
  }
  const thirdCitySelectHandler = (event) =>{
    setThirdCityName(event.target.value)
    setThirdStationName(cityToStation[firstCityName][0])
    updatePollutantsArray()
  }
  const thirdStationSelectHandler = (event) =>{
    setThirdStationName(event.target.value)
    updatePollutantsArray()
  }
  //pollutant
  const pollutantSelectHandler = (event) =>{
      // console.log(event.target.value)
      setPollutantName(event.target.value)
  }



  return (
    <React.Fragment>
      <h5>Select Location 1</h5>
      <Row className="btn-page">
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select State 1</Form.Label>
              <Form.Control as="select" onChange={firstStateSelectHandler} value={firstStateName}>
                {states?states.map((names,id)=>{
                  return(
                    <option key={"states "+id}>{names}</option>
                  )
                }):<option key="loading..">Loading...</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select city 1</Form.Label>
              <Form.Control as="select" onChange={firstCitySelectHandler} value={firstCityName}>
                {stateToCity[firstStateName]?stateToCity[firstStateName].map((names,id)=>{
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
              <Form.Label>Select Station/Area 1</Form.Label>
              <Form.Control as="select" onChange={firstStationSelectHandler} value={firstStationName}>
                {cityToStation[firstCityName]?cityToStation[firstCityName].map((names,id)=>{
                    return(
                      <option key={"Station "+id}>{names}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <br/>
      <h5>Select Location 2</h5>
      <Row className="btn-page">
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select State 2</Form.Label>
              <Form.Control as="select" onChange={secondStateSelectHandler} value={secondStateName}>
                {states?states.map((names,id)=>{
                  return(
                    <option key={"states "+id}>{names}</option>
                  )
                }):<option key="loading..">Loading...</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select city 2</Form.Label>
              <Form.Control as="select" onChange={secondCitySelectHandler} value={secondCityName}>
                {stateToCity[secondStateName]?stateToCity[secondStateName].map((names,id)=>{
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
              <Form.Label>Select Station/Area 2</Form.Label>
              <Form.Control as="select" onChange={secondStationSelectHandler} value={secondStationName}>
                {cityToStation[secondCityName]?cityToStation[secondCityName].map((names,id)=>{
                    return(
                      <option key={"Station "+id}>{names}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <br/>
      <h5>Select Location 3</h5>
      <Row className="btn-page">
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select State  3</Form.Label>
              <Form.Control as="select" onChange={thirdStateSelectHandler} value={thirdStateName}>
                {states?states.map((names,id)=>{
                  return(
                    <option key={"states "+id}>{names}</option>
                  )
                }):<option key="loading..">Loading...</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select city 3</Form.Label>
              <Form.Control as="select" onChange={thirdCitySelectHandler} value={thirdCityName}>
                {stateToCity[thirdStateName]?stateToCity[thirdStateName].map((names,id)=>{
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
              <Form.Label>Select Station/Area 3 3</Form.Label>
              <Form.Control as="select" onChange={thirdStationSelectHandler} value={thirdStationName}>
                {cityToStation[thirdCityName]?cityToStation[thirdCityName].map((names,id)=>{
                    return(
                      <option key={"Station "+id}>{names}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <br/>
      <h5>Select Pollutant to compare</h5>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select pollutant</Form.Label>
              <Form.Control as="select" onChange={pollutantSelectHandler} value={pollutantName}>
                {pollutants?pollutants.map((name,id)=>{
                    // console.log(obj["name"])
                    return(
                      <option key={"polllutant "+id}>{name}</option>
                    ) 
                  
                }):<option key="no state selected"> no state selected</option>}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart data={stationToPollutants[firstStationName]} updatedDate={date}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5" >Discrete Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarDiscreteChart data={stationToPollutants[firstStationName]} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Stacked/Grouped Multi-Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <MultiBarChart data={stationToPollutants[firstStationName]}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Pie Basic Chart</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieBasicChart data={stationToPollutants[firstStationName]}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Donut Chart</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieDonutChart data={stationToPollutants[firstStationName]} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Comparison;