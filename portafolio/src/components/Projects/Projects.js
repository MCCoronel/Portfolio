import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RickandMorty from "../../Assets/Projects/RickandMorty.png";
import BookBuster from "../../Assets/Projects/BookBuster.png";
import OhmyDog from "../../Assets/Projects/OhmyDog.png";
import Portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section background">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookBuster}
              isBlog={false}
              title="BookBuster"
              description="Bookbuster es una librería en la cual puedes registrarte como usuario para poder comprar libros tanto nuevos como usados, audiolibros y e-pub. Además la idea principal es que pueda generarse una comunidad entre los apasionados por la lectura, por lo que se puede dejar reseñas de los libros, dejar alguna cita que como lector te haya marcado o gustado y a su vez puedes dejar comentarios y likes en las reseñas y citas de otros lectores. También puedes guardar tus libros favoritos o por leer en distintas estanterías."
              ghLink="https://github.com/bookbuster-ar/web-app-backend"
              demoLink="https://bookbuster-ar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OhmyDog}
              isBlog={false}
              title="Oh My Dog"
              description="Aplicación que tenía como objetivo acceder a un registro de razas, así como también permitir el registro, a través de un formulario, de razas nuevas por parte del cliente. El cliente podrá, filtrar, combinar filtros, ordenar y editar/eliminar sus registros."
              ghLink="https://github.com/MCCoronel/Backend-DOGS"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7089781063048163328/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RickandMorty}
              isBlog={false}
              title="Rick and Morty"
              description="Diseñe y desarrolle una App, donde su objetivo es interactuar con las tarjetas de distintos personajes, que permitían acceder a su información, guardar como favoritos, búsquedas personalizadas, filtrar y ordenar."
              ghLink="https://github.com/MCCoronel/rym"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio personal"
              description="Este es mi portfolio personal de trabajo, aquí encontrarás ejemplos de mi trabajo, proyectos que he construido desde cero, un poco sobre mi y el stack tecnologico que manejo."
              ghLink="https://github.com/MCCoronel/Portfolio"
              demoLink="https://portfolio-mccoronel.vercel.app/project"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
