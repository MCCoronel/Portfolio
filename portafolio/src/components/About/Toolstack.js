import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiInsomnia,
} from "react-icons/si";
import ReactTooltip from 'react-tooltip';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Insomnia">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Vercel">
        <SiVercel />
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

export default Toolstack;
