import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPython} from 'react-icons/fa';
import { DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';
import {
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiSwagger,
  SiMongodb,
  SiJest,
  SiGraphql,
  SiApollographql
} from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons' data-tip='Python'>
        <FaPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='JavaScript'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Node.js'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='React'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Redux'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='MySQL'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='PostgreSQL'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='MongoDB'>
        <SiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className='tech-icons d-flex align-items-center justify-content-center'
      >
        <p style={{ fontSize: '45px' }} data-tip='Express.js'>
          Express.js
        </p>
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Swagger'>
        <SiSwagger />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Jest'>
        <SiJest />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='GraphQL'>
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Apollo Server'>
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='HTML5'>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='CSS3'>
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-tip='Bootstrap'>
        <FaBootstrap />
      </Col>

      {/* Contenedor de tooltip personalizado */}
      <style>
        {`
          .custom-tooltip {
            max-width: 200px; /* Ancho máximo del tooltip */
            min-width: 50px; /* Ancho mínimo del tooltip */
            white-space: nowrap; /* Evita el salto de línea */
          }
        `}
      </style>

      <ReactTooltip effect='solid' place='top' className='custom-tooltip' />
    </Row>
  );
}

export default Techstack;
