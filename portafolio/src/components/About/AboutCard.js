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
            soy de <span className="purple"> Santiago del Estero, Argentina.</span>
            <br /> Como lo mencione anteriormente, soy estudiante avanzada de Ingenieria en Alimentos, me falta un par de materias y la tesis.
            <br />
            Actualmente estoy en busca de <span className="purple">mi primer trabajo</span> en el <span className="purple">mundo IT</span>, mientras tanto, sigo capacitandome tanto en <span className="purple">Data Analytics</span> gracias una beca de <span className="purple">Cerveceria Quilmes y Udemy</span> en la cual fui seleccionada y en distintas tecnologias relacionadas al desarrollo <span className="purple">Backend</span>.
            <br />
            <br />
            Además de codear, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Conocer nuevas personas, me encanta el trabajo en equipo
            </li>
            <li className="about-activity">
              <ImPointRight /> Distintos deportes
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender cosas nuevas constantemente
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
