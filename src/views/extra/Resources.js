import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Card from '../../components/Card/MainCard';

const Resources = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card title="REFERENCES" isOption>
          {/* <h3>REFERENCES</h3> */}
          <ul>
              <li>
                <p><a href="https://data.gov.in/">data.gov.in</a>:-   used Air Quality Index API from data.gov.in, which is utilized to retrieve data. </p>
                
              </li>
              <li>
                  <p><a href="https://www.pranaair.com/blog/what-is-air-quality-index-aqi-and-its-calculation/">https://www.pranaair.com/blog/what-is-air-quality-index-aqi-and-its-calculation</a> :-   used this site to get information regarding air quality index and various pollutants present in air and how much levels are safe according to the Indian Government</p>
              </li>
              <li>
                  <p><a href="https://reactjs.org/">https://reactjs.org/</a> :- Used for reference while creating the website </p>
              </li>
              <li>
                  <p><a href="https://nvd3.org/">https://nvd3.org/</a>:- Used this for reference while creating charts</p>
              </li>
          </ul>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Resources;
