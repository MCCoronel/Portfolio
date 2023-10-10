import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/about.png';
import Particle from '../Particle';
import Type from './Type';

function Home1() {
  return (
    <Container fluid className='home-about-section home-section' id='home'>
      <Particle />
      <Container className='home-content'>
        <Row>
          <Col md={7} className='home-header'>
            <h1 style={{ paddingBottom: 15 }} className='heading'>
              Hi There!{' '}
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h1>

            <h1 className='heading-name'>
              I'M
              <strong className='main-name'> MARIA CELESTE CORONEL</strong>
            </h1>

            <div
              style={{
                paddingLeft: 40,
                paddingTop: 10,
                paddingBottom: 50,
                textAlign: 'left'
              }}
            >
              <Type/>
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt='home pic'
              className='img-fluid'
              style={{ maxHeight: '550px' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home1;
