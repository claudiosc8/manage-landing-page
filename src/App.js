import React from 'react';
import './App.scss';
import Illustration from './images/illustration-intro.svg'
import {features, testimonials} from './data'
import TestimonialsSlider from './Testimonials'
import {Nav, Button, Container, Row, Col} from 'react-bootstrap/'
import Facebook from './images/icon-facebook.svg'
import Pinterest from './images/icon-pinterest.svg'
import Twitter from './images/icon-twitter.svg'
import Youtube from './images/icon-youtube.svg'
import Instagram from './images/icon-instagram.svg'
import SubscribeForm from './SubscribeForm'
import Logo from './Logo'
import Navbar from './Navbar'

function App() {


  return (
      
      <React.Fragment>
      <header>
        <Container>
          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>
        </Container>
      </header>
      <section className='hero'>
        <Container>
          <Row>
          <Col md className='content'>
            <h1>Bring everyone together to build better products.</h1>
            <p className='paragraph reduced-width'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <Button>Get started</Button>
          </Col>
          <Col md>
            <img src={Illustration} alt='hero illustration' />
          </Col>
          </Row>
        </Container>
      </section>
       <section>
        <Container>
          <Row>
          <Col md>
            <h2>What’s different about Manage?</h2>
            <p className='paragraph reduced-width'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
          </Col>
          <Col md className='features-wrapper'>
            {features.map((feature, index) => {
              return (
              <div key={index} className='feature'>
                <div className='feature-key'>{feature.key}</div>
                <div className='feature-content'>
                  <div className='heading'><div className='feature-key'>{feature.key}</div><div className='title'>{feature.title}</div></div>
                  <div className='paragraph'>{feature.text}</div>
                </div>
              </div>
              )
            })}
          </Col>
          </Row>
        </Container>
      </section>
      <section className='center last'>
        <Container fluid className='p-0'>
          <Row noGutters>
          <Col>
            <h2>What they’ve said</h2>
            <TestimonialsSlider data={testimonials} />
            <Button>Get started</Button>
          </Col>
          </Row>
        </Container>
      </section>
      <section className='filled'>
        <Container>
          <Row>
          <Col md>
            <h2>Simplify how your team works today.</h2>
          </Col>
          <Col md className='align-right'>
            <Button>Get started</Button>
          </Col>
          </Row>
        </Container>
      </section>
      <footer>
         <Container>
            <Row noGutters> 
            <Col xs={{span:12, order: 3 }} md={{span:3, order:1}}>
              <div className='logo'><Logo className='white'/></div>
              <div className='social-icons'>
                <img src={Facebook} alt='Facebook' />
                <img src={Twitter} alt='Twitter' />
                <img src={Instagram} alt='Instagram' />
                <img src={Pinterest} alt='Pinterest' />
                <img src={Youtube} alt='Youtube' />
              </div>
              <div className='mobile copyright'>Copyright 2020. All Rights Reserved</div>
            </Col>
            <Col xs={{span:12, order: 2 }} md={{span:6, order:2}}>
              <Row noGutters>
              <Col>
              <Nav>
                  <div className='nav-link'>Home</div>
                  <div className='nav-link'>Pricing</div>
                  <div className='nav-link'>Product</div>
                  <div className='nav-link'>About Us</div>
                  
              </Nav>
              </Col>
              <Col>
              <Nav>
                  <div className='nav-link'>Careers</div>
                  <div className='nav-link'>Community</div>
                  <div className='nav-link'>Privacy Policy</div>
              </Nav>
              </Col>
              </Row>
            </Col>
            <Col xs={{span:12, order: 1 }} md={{span:3, order:3}}>
              <SubscribeForm />
              <div className='copyright'>Copyright 2020. All Rights Reserved</div>
            </Col>
            </Row>
          </Container>
      </footer>
      </React.Fragment>
  );

}

export default App;
