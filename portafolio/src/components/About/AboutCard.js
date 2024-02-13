import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenido a esta seccion, me llamo <span className="purple"> Maria Celeste </span>
            soy de Santiago del Estero pero actualmente estoy residiendo en <span className="purple">Cordoba.</span>
            <br /> 
            <br />
            En cuanto a mi <span className="purple">experiencia laboral</span>, trabaje como <span className="purple">Desarrolladora Backend</span> en la empresa BookBuster y como <span className="purple">Teaching Assistant Full Stack</span> en Henry Bootcamp.

            <br />
            <br />
            Además de codear, ¡hay otras actividades que me encantan!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Soy una estudiante avanzada de Ingenieria en Alimentos, actualmente desarrollando mi tesis.
            </li>
            <li className="about-activity">
              <ImPointRight /> Me encanta el analisis de datos.
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender cosas nuevas constantemente.
            </li>
          <li className="about-activity">
              <ImPointRight /> Conocer nuevas personas, disfruto del trabajo en equipo.
            </li>
            <li className="about-activity">
              <ImPointRight /> Distintos deportes.
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
