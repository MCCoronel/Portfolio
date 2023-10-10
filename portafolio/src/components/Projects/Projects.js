import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="BookBuster"
              description="Bookbuster es una librería en la cual puedes registrarte como usuario para poder comprar libros tanto nuevos como usados, audiolibros y e-pub. Además la idea principal es que pueda generarse una comunidad entre los apacionados por la lectura, por lo que se puede dejar reseñas de los libros, dejar alguna cita que como lector te haya marcado o gustado y a su vez puedes dejar comentarios y likes en las reseñas y citas de otros lectores. También puedes guardar tus libros favoritos o por leer en distintas estanterías."
              ghLink="https://github.com/bookbuster-ar/web-app-backend"
              demoLink="https://bookbuster-ar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Oh My Dog"
              description="Aplicación que tenía como objetivo acceder a un registro de razas, así como también permitir el registro, a través de un formulario, de razas nuevas por parte del cliente. El cliente podrá, filtrar, combinar filtros, ordenar y editar/eliminar sus registros."
              ghLink="https://github.com/MCCoronel/Backend-DOGS"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7089781063048163328/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rick and Morty"
              description="Diseñe y desarrolle una App, donde su objetivo es interactuar con las tarjetas de distintos personajes, que permitían acceder a su información, guardar como favoritos, búsquedas personalizadas, filtrar y ordenar."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio"
              description="Diseno y desarrollo de mi portfolio personal, contiene secciones como Home, about, proyectos y descarga del CV"
              ghLink="https://github.com/MCCoronel/Portfolio"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
