import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Card from '../../components/Card/MainCard';

const AQI_intro = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card title="Air Quality Index" isOption>
            <h3>Air Quality Index</h3>
            <p>Air pollution is a major concern these days. The presence of an unwanted thing, contaminant, or agent in the air 
              leads to air pollution. AQI is used to represent the quality of air present around us.</p>
              <h4>What is the Air Quality Index (AQI)?</h4>
              <p>Air Quality Index (AQI) is a number used to convey the quality of air by the government to the general public. 
                Air quality deteriorates with an increase in the concentration of pollutants. The Air Quality Index represents the 
                severity of pollution for ordinary people.</p>
                <h4>Indian (CPCB) AQI:</h4>
                <p>According to the Indian Government (CPCB), Indian AQI range is from 0-500, from 0 being good and 500 being severe. 
                  There are eight major pollutants to be taken into account for AQI calculation, viz. particulate matter (PM 10 and PM 2.5)
                  , carbon monoxide (CO), ozone (O3), nitrogen dioxide (NO2), sulfur dioxide (SO2), ammonia (NH3), and lead (Pb). 
                  To calculate AQI, data for a minimum of three pollutants must be present, of which one should be either PM10 or PM2.5, 
                  AQI ranging from 0-500 has different concentrations for each pollutant and has health effects accordingly.</p>
                <h4>Indian AQI range & probable impacts:</h4>
                <ul>
                    <li><b>0-50:</b>  This range defines air quality as good as it shows minimal or no impact on health.</li>
                    <li><b>51-100: </b> This is a satisfactory air quality range and it can show effects such as breathing difficulty in sensitive groups.</li>
                    <li><b>101-200:</b>   The range shows moderate air quality with impacts such as breathing discomfort for children and elderly people, and people already suffering from lung disorders and heart disease.</li>
                    <li><b>201-300:</b> AQI falling in this range communicates that the air quality is poor and shows health effects on people when exposed for the long term. People already suffering from heart diseases can experience discomfort from short exposure.</li>
                    <li><b>301-400:</b> This range shows very poor air quality and causes respiratory illness for a longer duration of exposure.</li>
                    <li><b>401-500:</b> This is the severe range of AQI causing health impacts to normal and diseased people. It also causes severe health impacts on sensitive groups.</li>
                </ul>
                <h4> US-EPA AQI:</h4>
                <p>The ranges of US AQI from 0-500 according to US-EPA, 0 stands for good and 500 for severe. The six major air pollutants are taken to calculate AQI, which are, Particulate Matter (PM 10 and PM 2.5), carbon monoxide (CO), ozone (O3), nitrogen dioxide (NO2), and sulfur dioxide (SO2). AQI ranging from 0-500 has different pollutant concentrations and associated health effects.
                </p>
                <h4>US-EPA AQI range & probable impacts:</h4>
                <ul>
                    <li><b>0-50:</b>  The range shows that the air quality is good and it poses no health threat.</li>
                    <li><b>51-100: </b> This range is moderate and the quality is acceptable. Some people may experience discomfort.</li>
                    <li><b>101-200:</b> The air quality in this range is unhealthy for sensitive groups. They experience breathing discomfort.</li>
                    <li><b>201-300:</b> The range shows unhealthy air quality and people start to experience effects such as breathing difficulty.</li>
                    <li><b>301-400:</b> Air quality is very unhealthy in this range and health warnings may be issued for emergency conditions. All people are likely to be affected.</li>
                    <li><b>401-500:</b> This is the hazardous category of air quality and serious health impacts such as breathing discomfort, suffocation, airway irritation, etc. may be experienced by all.
                    </li>
                </ul>
                
          </Card>
          <Card title="Air Quality Index Parameters" isOption>
          <h3>Air Quality Index Parameters</h3>
                <ol>
                    <li>
                        <h4>
                            Particulate Matter (PM10 & PM2.5)
                        </h4>
                        <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/pm-icon-100x100.jpg" alt="" />
                        <p style={{display: "box"}}>A mixture of particles with liquid droplets in the air forms particulate matter. PM 10 are particles that have a size of less than or equal to 10 microns whereas PM2.5 are ultra-fine particles having a size of less than or equal to 2.5 microns.</p>
                        <h5>Sources:</h5>
                        <p>Particulate Matter is released from constructions, smoking, cleanings, renovations, demolitions, constructions, natural hazards such as earthquakes, volcanic eruptions, and emissions from industries such as brick kilns, paper & pulp, etc.</p>
                        <h5>Related effects:</h5>
                        <p>These particles, when inhaled, can penetrate deeper into the respiratory system and cause respiratory ailments such as asthma, coughing, sneezing, irritation in the airways, eyes, nose, throat irritation, etc. Studies have also shown links between PM exposure and diabetes.</p>
                        <h5>Safe exposure limits:</h5>
                        <p>The Indian Government and the US-EPA both use PM10 and PM2.5 as one of the criteria for air quality index (AQI) calculation. The safe exposure levels for<b> PM10 (24 hours) are 0-100 ug/m3 and for PM 2.5 (24 hours) is 0-60 ug/m3</b> as per the Indian CPCB. As per US-EPA, safe levels of PM10 are 0-54 ug/m3 and PM 2.5 is 0-12.0 ug/m3.</p>
                        <table className='table'>
                        <tbody>
                        <tr>
                            <th>Indian AQI</th>
                            <th>PM10 (ug/m3)</th>
                            <th>PM2.5 (ug/m3)</th>
                        </tr>
                        <tr><td>0-50</td>
                        <td>0-50</td>
                        <td>
                            0-30
                        </td></tr>
                        <tr>
                            <td>
                                51-100
                            </td>
                            <td>
                                51-100
                            </td>
                            <td>
                                31-60
                            </td>
                        </tr>
                        <tr>
                            <td>
                                101-200
                            </td>
                            <td>
                                101-250
                            </td>
                            <td>
                                61-90
                            </td>
                        </tr>
                        <tr>
                            <td>201-300</td>
                            <td>251-350</td>
                            <td>91-120</td>
                        </tr>
                        <tr>
                            <td>
                                301-400
                            </td>
                            <td>351-430</td>
                            <td>121-250</td>
                        </tr>
                        <tr>
                            <td>401-500</td>
                            <td>430+</td>
                            <td>250+</td>
                        </tr>
                    </tbody>
                    </table >
                    <h5>How to measure PM (2.5 & 10)</h5>
                    <p>Particulate matter can be measured by a laser PM sensor using the light scattering method.</p>
                    </li>
        <li>
            <h4>
                Carbon Monoxide
            </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/co-icon-100x100.jpg" alt="" />
            <p style={{display: "box"}}>A mixture of particles with liquid droplets in the air forms particulate matter. PM 10 are particles that have a size of less than or equal to 10 microns whereas PM2.5 are ultra-fine particles having a size of less than or equal to 2.5 microns.</p>
            <h5>Sources:</h5>
<p>It is a colorless gas, released from automobile emissions, fires, industrial processes, gas stoves, kitchen chimneys, generators, wood-burning smoking, etc. into the atmosphere.
</p>
            <h5>Related effects:</h5>
<p>Exposure to carbon monoxide causes carbon monoxide poisoning (interference with oxygen-hemoglobin binding) in human beings, chest pain, heart diseases, reduced mental capabilities, vision problems, and contributes to smog formation.</p>
            <h5>Safe exposure limits:</h5>
            It is used by both the Indian government and US- EPA as AQI criteria. The safe level of exposure according to the Indian government is<b> 0-04 mg/m3 (1-hour)</b> and according to the US-EPA is 0-9.4 ppm at 8 hours.
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range CO (mg/m3)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-1.0</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    1.1-2.0
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    2.1-10
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>10.1-17</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>17.1-34</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>34+</td>
               
            </tr>
        </tbody>
        </table >
        <h5>How to measure carbon monoxide (CO)</h5>
        <p>Carbon monoxide can be measured by a sensor using the electrochemical method. </p>
        </li>
        <li>
            <h4>
                Ozone (O3)
            </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/o3-icon-100x100.jpg" alt="" />
<p>Ozone is composed of three oxygen atoms. It forms the protective layer which prevents entry of harmful ultraviolet radiation into the earth. The ground ozone is very harmful to human beings and the environment.</p>
            <h5>Sources:</h5>
<p>It is released from industries, automobile emissions, gasoline vapors, solvents, chemicals, and electronic devices. Nitrogen oxides (NOx) and total Volatile Organic Compounds (tVOCs) also contribute to ground ozone formation.</p>
            <h5>Related effects:</h5>
<p>Ground ozone interferes with the plant’s respiration process and enhances environmental stressor susceptibility. When ozone is inhaled by humans, reduced lung function, inflammation of airways, and irritation in the eyes, nose & throat are seen.</p>
            <h5>Safe exposure limits:</h5>
<p>Ozone is one criteria for AQI used by both the Indian and US-EPA. As per the Indian Government, safe exposure is <b>0-100 ug/m3 (8 hours)</b>     and as per the US-EPA, it is 0-0.054 ppm (8 hours).</p>
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range for O3 (ug/m3)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-50</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    51-100
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    101-168
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>168-208</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>209-748</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>748+</td>
               
            </tr>
        </tbody>
        </table >
        <h5>How to measure ozone(O3)</h5>
        <p>Ozone gas can be measured by a sensor using the electrochemical method.  </p>
        </li>
       
       
        <li>
            <h4>
                Nitrogen Dioxide (NO2)
                        </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/no2-icon-100x100.jpg" alt="" />
<p>Nitrogen dioxide is a known highly reactive gas present in the atmosphere. </p>
            <h5>Sources:</h5>
<p>It is released into the environment from automobile emissions, generation of electricity, burning of fuel, combustion of fossil fuel, and different industrial processes.</p>
            <h5>Related effects:</h5>
<p>Nitrogen dioxide poisoning is as much as hazardous as carbon monoxide poisoning. It is when inhaled can cause serious damage to the heart, absorbed by the lungs, inflammation, and irritation of airways. Smog formation and foliage damage are some environmental impacts of nitrogen dioxide.</p>
            <h5>Safe exposure limits:</h5>
<p>The Indian government and US-EPA use Nitrogen dioxide as a parameter for calculating AQI. As per the Indian Government, safe exposure is <b>0-80 ug/m3 (24 hours) </b>and as per US-EPA, it is 0-53 ppb (1 hour).</p>
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range for NO2 (ug/m3)(24 hours)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-40</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    41-80
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    81-180
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>181-280</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>280-400</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>400+</td>
               
            </tr>
            </tbody>
        </table >
        <h5>How to measure nitrogen dioxide (NO2)</h5>
        <p>A sensor using the electrochemical method can measure NO2 gas. </p>
        </li>
        <li>
            <h4>
                Sulfur Dioxide (SO2)
                                    </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/so2-icon-100x100.jpg" alt="" />
<p>Sulfur dioxide is a colorless gas with a burnt odor and the chemical formula SO2. The gas is acidic & corrosive in nature and can react in the atmosphere with other compounds to form sulfuric acid and other oxides of sulfur.</p>
            <h5>Sources:</h5>
<p>Emissions from automobiles, industries, combustion of fossil fuel, generation of electricity, etc. are reasons for the entry of sulfur dioxide into the atmosphere.</p>
            <h5>Related effects:</h5>
<p>Sulfur dioxide is a major cause of haze production, acid rain, damage to foliage, monuments & buildings, reacts and forms particulate matter. In humans, it causes breathing discomfort, asthma, eyes, nose, and throat irritation, inflammation of airways, and heart diseases.</p>
            <h5>Safe exposure limits:</h5>
            Sulfur Dioxide is used by the Indian government and US-EPA as a parameter for Air Quality Index (AQI) calculation. The safe exposure level is <b>0-80 ug/m3 (24 hours)</b> and 0-75 ppb (1 hour) according to the Indian government and US-EPA respectively.
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range for SO2 (ug/m3)(24 hours)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-40</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    41-80
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    81-380
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>381-800</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>800-1600</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>1600+</td>
               
            </tr>
            </tbody>
        </table >
        <h5>How to measure sulfur dioxide (SO2)</h5>
        <p>A sensor using the electrochemical method can measure SO2 gas.</p>
        </li>
        <li>
            <h4>
                Ammonia (NH3)
                                                </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/nh3-icon-100x100.jpg"alt="" />
<p>Ammonia is a colorless, reactive, and soluble alkaline gas with a strong pungent odor and is only used by the Indian government as a parameter of AQI.</p>
            <h5>Sources:</h5>
<p>The major sources of ammonia are agricultural activities, animal husbandry, fertilizers, various industrial processes, emissions from automobiles, volatilization from oceans and soil, etc.</p>
            <h5>Related effects:</h5>
<p>Ammonia is a major reason for eutrophication in water bodies. It contributes to climate change, the formation of particulate matter, a reduction in visibility, and the atmospheric deposition of nitrogen atoms. Human beings experience immediate eyes, nose, throat, and respiratory tract burning, blindness, and lung damage upon exposure to high levels. It may cause coughing and irritation in the eyes, nose, and throat with low concentration exposure.</p>
            <h5>Safe exposure limits:</h5>
<p> NH3 is considered as an air quality parameter by the Indian government and the safe exposure level is<b> 0-400 ug/m3 (24 hours)</b>.</p>
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range for NH3 (ug/m3)(24 hours)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-200</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    201-400
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    401-800
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>801-1200</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>1201-1800</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>1800+</td>
               
            </tr>
            </tbody>
        </table >
        </li>
        <li>
            <h4>
                Lead (Pb)
                                                            </h4>
            <img src="https://cdn-cenii.nitrocdn.com/dxZQGVjeOyXblsYkcsxiHEoJOLKUvtcl/assets/static/optimized/rev-95b9641/wp-content/uploads/2021/09/lead-icon-100x100.jpg"alt="" />
<p>Lead is a blue-white lustrous metal belonging to the heavy metal group. It is corrosive and resistant in nature but gets easily tarnished when exposed to air.</p>
            <h5>Sources:</h5>
<p>It is released during metal processing, waste incineration, fossil fuel combustion, waste batteries, emissions from vehicles, combustion of fossil fuels, etc.  </p>
            <h5>Related effects:</h5>
<p>

    The effect of lead (Pb) exposure can cause nephrotoxicity, neurotoxicity, bone deformations, reduced reproduction, learning disabilities, cardiovascular effects, biodiversity loss, reduced soil fertility, and water contamination.</p>
            <h5>Safe exposure limits:</h5>
<p>The safe level of exposure to lead is <b>0-1.0 ug/m3</b> (24 hours) as per Indian CPCB.</p>
            <table className='table'>
            <tbody>
            <tr>
                <th>Indian AQI</th>
                <th> Indian Range for Pb (ug/m3)(24 hours)</th>
            </tr>
            <tr><td>0-50</td>
            <td>0-0.5</td>
            </tr>
            <tr>
                <td>
                    51-100
                </td>
                <td>
                    0.6-1.0
                </td>
                
            </tr>
            <tr>
                <td>
                    101-200
                </td>
                <td>
                    1.1-2.0
                </td>
            </tr>
            <tr>
                <td>201-300</td>
                <td>2.1-3.0</td>
            </tr>
            <tr>
                <td>
                    301-400
                </td>
                <td>3.10-3.5</td>
                
            </tr>
            <tr>
                <td>401-500</td>
                <td>3.5+
                </td>
               
            </tr>
            </tbody>
        </table >
        </li>
    </ol>
    
    
          </Card>
          <Card title="How to calculate Air Quality Index?" isOption>
          <h4>How to calculate Air Quality Index?</h4>
                <p>The formula to calculate AQI is the same as per the Indian CPCB and US-EPA. The AQI is calculated using the equations separately for parameters. For example, if you wish to calculate AQI on the basis of four parameters, use the equation four times, and the worst sub-index communicates the AQI. A subindex is a linear function (two different yet related notions) of the concentration of pollutants. </p>
                <p><b>Ip = [IHi – ILo / BPHi – BPLo] (Cp – BPLo) + ILo </b></p>
                <p>Where,</p>

                <p> Ip = index of pollutant p</p>
                <p> Cp = truncated concentration of pollutant p</p>
                <p> BPHi = concentration breakpoint i.e. greater than or equal to Cp</p>
                <p> BPLo = concentration breakpoint i.e. less than or equal to Cp</p>
                <p> IHi = AQI value corresponding to BPHi</p>
                <p> ILo = AQI value corresponding to BPLo
                </p>
            
          </Card>
          <Card title="10 Tips how you can reduce Air Pollution: " isOption>
            <h4>10 Tips how you can reduce Air Pollution: </h4>
            <ol>
                <li>Limit the frequent use of vehicles</li>
                <li>Quit smoking tobacco</li>
                <li>Do not use and burn plastics</li>
                <li>Minimize waste production</li>
                <li>Buys things of use as it will reduce waste.</li>
                <li>Minimize the use of air conditioners, refrigerants, and other coolants.</li>
                <li>Follow the 5 R’s: Reuse, Reduce, Recycle, Repair, and Refuse.</li>
                <li>Opt for public transport</li>
                <li>Switch to renewable energy such as solar and wind energy</li>
                <li>Get your kitchen chimneys clean regularly</li>
            </ol>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AQI_intro;
