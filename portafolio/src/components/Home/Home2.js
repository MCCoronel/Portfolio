import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Me7 from '../../Assets/Me7.png';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home2() {
  return (
    <Container fluid className='home-about-section2' id='about'>
      <Container>
        <Row>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img
                src={Me7}
                className='img-fluid img-grande'
                alt='Maria Celeste'
              />
            </Tilt>
          </Col>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              PERMITANME <span className='purple'> PRESENTARME </span>{' '}
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h1>
            <p className='home-about-body'>
              A medidados del <span className='purple'> 2022</span>, decidi
              incursionar en el mundo de la tecnologia de forma autodidacta, un
              ambito que hace mucho me gustaba, principalmente
              la{' '}
              <span className='purple'>programacion</span>.
              En el <span className='purple'>2023</span>, amplié aún más mis
              conocimientos al unirme a Henry, donde cursé un programa de
              estudio intensivo que me permitió adquirir habilidades
              avanzadas en desarrollo web y otras disciplinas relacionadas con
              la tecnología.
              <br />
              <br />
              Domino tecnologias como
              <i>
                <b className='purple'>
                  {' '}
                  Javascript,Python, Node.js, Express, SQL, React, HTML, CSS
                </b>
                , entre otros que se encuentran en la seccion{' '}
                <Link to={'/about'} className='purple'>
                  Sobre mi
                </Link>{' '}
                o adjuntadas en mi{' '}
                <Link to={'/CV'} className='purple'>
                  CV
                </Link>
              </i>
              <br />
              <br />
              Mi campo de interes principalmente es el area de &nbsp;
              <i>
                <b className='purple'>
                  Desarrollo Backend y el analisis de datos
                </b>
              </i>
              <br />
              <br />
              Soy una persona <b className='purple'>curiosa, con pensamiento analitico</b> y {' '}
              <b className='purple'>gran facilidad de adaptación</b> lo cual me
              lleva a especializarme cada vez más en este campo de la
              tecnología.
              <br />
              <br />
              <p>
                Considero que mi{' '}
                <b className='purple'> pasión por el constante aprendizaje</b>{' '}
                puede contribuir significativamente en{' '}
                <b className='purple'>cualquier entorno</b>.
              </p>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={15} className='home-about-social'>
            <h1 style={{ fontSize: '2.5em' }}>Encuentrame en :</h1>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/MCCoronel/MCCORONEL'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/mcelestecrnl'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='mailto:mcelestecrnl@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://wa.me/5493854065382'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
            <p style={{ fontSize: '1.2em' }}>
              No dudes en <span className='purple'>conectar </span>conmigo
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
