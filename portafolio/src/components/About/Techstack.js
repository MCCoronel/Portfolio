import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';
import { SiPostgresql , SiMysql, SiRedux} from 'react-icons/si';


function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
        <Col
          xs={4}
          md={2}
          className='tech-icons d-flex align-items-center justify-content-center'
        >
          <p style={{ fontSize: '45px' }}>Express.js</p>
        </Col>
    </Row>
  );
}

export default Techstack;
