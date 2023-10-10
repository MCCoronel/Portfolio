import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me7 from "../../Assets/Me7.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Me7} className="img-fluid" alt="Maria Celeste" style={{borderRadius: '50%', paddingTop: '50px'}}/>
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITANME <span className="purple"> PRESENTARME </span> <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </h1>
            <p className="home-about-body">
              A pocas materias de recibirme como ingenieria, a medidados del 2022, decidi incursionar en el mundo de la tecnologia de forma autodidacta, un mundo que hace mucho me llamaba la atencion, principalmente el mundo de la programacion y analisis de datos.En el 2023, amplié aún más mis conocimientos al unirme a Henry, donde cursé un programa de estudio intensivo de 4 meses que me permitió adquirir habilidades avanzadas en desarrollo web y otras disciplinas relacionadas con la tecnología.
              <br />
              <br />Domino tecnologias como
              <i>
                <b className="purple"> Javascript, Node.js, Express, SQL, React, HTML, CSS</b>, entre otros que se encuentran en la seccion <Link to={"/about"} className="purple">About</Link>
              </i>
              <br />
              <br />
              Mi campo de interes principalmente es el area de &nbsp;
              <i>
                <b className="purple">
                  Desarrollo Backend y manejo de Bases de datos
                </b>
              </i>
              <br />
              <br />
              Soy una persona <b className="purple">curiosa</b> y con <b className="purple">gran facilidad de adaptación</b> lo cual me lleva a especializarme cada vez más en este campo de la tecnología.
              <br />
              <br />
              <p>
              Creo que mi <b className="purple"> pasión por el constante aprendizaje</b> puede contribuir significativamente en <b className="purple">cualquier entorno</b>.
              </p>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentrame en</h1>
            <p>
              No dudes en <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MCCoronel/MCCORONEL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mcelestecrnl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
