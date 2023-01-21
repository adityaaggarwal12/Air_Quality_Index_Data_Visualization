import axios from 'axios';

// let states=[]
// let stateToCity={}
// let cityToStation={}
// let stationToPollutants={}

const Information_maps = async() => {
    let response = await axios.get("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000010dab50cccbca40aa7b5b3d059eba9732&format=json&limit=2166#/")
    let data = response.data.records
    let date  = response.data.updated_date
    // console.log(data)
    let states = []
    let stateToCity = {}
    let cityToStation = {}
    let stationToPollutants = {}
    for(let i=0;i<data.length;i++){
        let state = data[i].state
        let city = data[i].city
        let station = data[i].station
        let pollutant = data[i].pollutant_id
        if(!states.includes(state)){
            states.push(state)
            stateToCity[state] = []
        }
        if(!stateToCity[state].includes(city)){
            stateToCity[state].push(city)
            cityToStation[city] = []
        }
        if(!cityToStation[city].includes(station)){
            cityToStation[city].push(station)
            stationToPollutants[station] = []
        }
        if(!stationToPollutants[station].includes(pollutant)){
            stationToPollutants[station].push({
                "name" : pollutant,
                "min" : data[i].pollutant_min,
                "max" : data[i].pollutant_max,
                "avg" : data[i].pollutant_avg,

            })
        }
    }
    // console.log(states)
    // console.log(stateToCity)
    // console.log(cityToStation)
    // console.log(stationToPollutants)
    return [states,stateToCity,cityToStation,stationToPollutants,date]
}
export default Information_maps
