import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CertificateCards from './CertificateCards';
import Particle from '../Particle';
import FullStack from '../../Assets/Certificates/Full Stack Henry.jpg';
import TAHenry from '../../Assets/Certificates/TA Henry.jpg';
import MasterSQL from '../../Assets/Certificates/Master SQL.jpg';
import SQLavanzado from '../../Assets/Certificates/SQL avanzado.jpg';
import POOTesters from '../../Assets/Certificates/programacion para testers.jpg';
import postman from "../../Assets/Certificates/Postman.jpg"
import serverless from '../../Assets/Certificates/serverless.jpg';
import powerSkills from '../../Assets/Certificates/5 power skills.jpg';
import designSprints from '../../Assets/Certificates/validar mi idea en 5 dias.jpg';
import data from '../../Assets/Certificates/data Quilmes.png';
import dataCoder from '../../Assets/Certificates/Data analyticss.jpg';

function Certificates() {
  return (
    <Container fluid className='project-section background'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          <strong className='purple'>Certificados </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Aquí hay algunos certificados que validan algunos conocimientos o
          tecnologias en las que me he capacitado recientemente.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <a
              href='https://certificates.soyhenry.com/new-cert?id=be8e06a655a7310412bbf68f2f975dd521058e76645ae7b31d19744aed6ed05a'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={FullStack}
                isBlog={false}
                title='Certificate Full Stack Web at Henry'
                description='Certificado de Desarrollador Web Full Stack de Henry: Adquirí habilidades avanzadas en desarrollo web con el programa intensivo de Henry. Competencias tanto en el desarrollo del lado del cliente como del servidor, con experiencia integral en el desarrollo de aplicaciones web desde el front-end hasta el back-end. Tecnologías clave incluyen React, Node.js, SQL entre otras. Certificado obtenido en Agosto 2023'
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href=' https://certificates.soyhenry.com/new-cert?id=667823a8f40c4fd963105c1cf15e4e5d0c8ceafc95bdf7e86779e0d975603d0b'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={TAHenry}
                isBlog={false}
                title='Certificate Teaching Assistant at Henry'
                description='Certificación obtenida tras completar exitosamente la formación intensiva proporcionada por Cervecería Quilmes, una oportunidad otorgada gracias a una beca que me fue conferida. Durante este riguroso programa, me sumergí en el ámbito de Data Analytics, adquiriendo conocimientos especializados en tecnologías fundamentales como SQL y PowerBI.'
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://www.coderhouse.com/certificados/65c738f43213f7d1767aeec5?lang=es'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={dataCoder}
                isBlog={false}
                title='Certificacion Curso Data analytics'
                description='Durante este curso intensivo, adquirí los fundamentos de las bases de datos y apliqué habilidades en SQL para manipular datos relacionales. Diseñé tableros efectivos en Power BI, empleando DAX, Lenguaje M y Power Query para análisis detallados y presentación clara de información. Estoy listo para proyectos de data analytics de principio a fin.'
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href=' https://certificates.soyhenry.com/new-cert?id=667823a8f40c4fd963105c1cf15e4e5d0c8ceafc95bdf7e86779e0d975603d0b'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={data}
                isBlog={false}
                title='Certificacion Data analytics'
                description='Certificación obtenida tras completar exitosamente la formación intensiva proporcionada por Cervecería Quilmes, una oportunidad otorgada gracias a una beca que me fue conferida. Durante este programa, me sumergí en el ámbito de Data Analytics, adquiriendo conocimientos especializados en tecnologías fundamentales como SQL y PowerBI.'
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-830f48d0-dff2-43f0-9d76-51102ceb6b27.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={MasterSQL}
                isBlog={false}
                title='Certificate of the course "Master SQL" provided by Udemy and Cerveceria Quilmes'
                description='"Master SQL Server" en Udemy, donde adquirí habilidades avanzadas en el manejo y administración de bases de datos con SQL Server. A lo largo del curso, exploré conceptos clave, técnicas avanzadas y prácticas recomendadas para optimizar el rendimiento de bases de datos. Este logro refleja mi compromiso con la maestría en SQL Server y mi capacidad para aplicar eficazmente estos conocimientos en proyectos prácticos'
              />
            </a>
          </Col>
          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-a3002d44-7ff0-49eb-8e66-646b248cb0bc.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={SQLavanzado}
                isBlog={false}
                title="Certificate of the course 'SQL Avanzado' provided by Udemy and Cerveceria Quilmes"
                description='Certificación obtenida en el curso "SQL: Programación Avanzada" en Udemy. A través de este curso, he perfeccionado mis habilidades en programación SQL, abordando conceptos avanzados y estrategias para resolver problemas complejos de bases de datos. La experiencia adquirida aquí se traduce en una sólida capacidad para diseñar consultas eficientes y optimizar el rendimiento de bases de datos, consolidando mi destreza en el manejo avanzado de SQL.'
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-119c8c34-77da-45fd-ba8f-e20cb7141d6c.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={POOTesters}
                isBlog={false}
                title='Certificate of the course "Object Oriented Programming for Testers" on Udemy '
                description="Certificación en 'Programación para Testers' en Udemy. Adquirí habilidades clave, desde los lenguajes más populares hasta principios de Programación Orientada a Objetos y el uso profesional de Source Control Management con GitHub."
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-119c8c34-77da-45fd-ba8f-e20cb7141d6c.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={postman}
                isBlog={false}
                title='Certificate of the course "Postman para API e integraciones" on Udemy '
                description="Certificado en el curso completo de Postman en Udemy. Adquirí habilidades clave para manejar solicitudes HTTP, autenticación, y documentación de APIs con Postman. Desde peticiones básicas hasta avanzadas, aprendí a trabajar con headers, variables globales, y a automatizar pruebas con scripts. Exploré funciones avanzadas, creé mocks, y ejecuté colecciones desde la terminal con la librería Newman. Este curso, enfocado en la aplicación práctica, me ha capacitado para destacar en entornos tecnológicos y mejorar la eficiencia en pruebas y automatización de APIs"
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-119c8c34-77da-45fd-ba8f-e20cb7141d6c.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={serverless}
                isBlog={false}
                title='Certificate of the course "AWS Lamba/Serverless con Node.js" on Udemy '
                description="Certificación en 'Desarrollo Serverless con AWS y NodeJS'. Aprendí a crear funciones Serverless en AWS con NodeJS, construir endpoints API utilizando RDS y SES, y configurar DNS para el envío de correos. También adquirí habilidades en el uso de plugins para facilitar el desarrollo de proyectos."
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-119c8c34-77da-45fd-ba8f-e20cb7141d6c.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={powerSkills}
                isBlog={false}
                title='Certificate of the course "5 Power skills para mujeres que lideran" provided by Udemy and Cerveceria Quilmes'
                description=''
              />
            </a>
          </Col>

          <Col md={4} className='project-card'>
            <a
              href='https://udemy-certificate.s3.amazonaws.com/image/UC-119c8c34-77da-45fd-ba8f-e20cb7141d6c.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CertificateCards
                imgPath={designSprints}
                isBlog={false}
                title='Certificate of the course "Design Sprints: Validate my idea in 5 days" provided by Udemy and Cerveceria Quilmes'
                description=''
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
