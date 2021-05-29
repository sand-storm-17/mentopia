import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron,Container, Row} from 'react-bootstrap';
import Video from './Video';

function HomeBody() {
    return (
        <div>
        <section className="colored-section" id="title">
            <div className="container-fluid">
            {/* Title */}
            <div className="row">
                <div className="col-lg-6">
                <h1 className="big-heading">Worried about your mental health </h1>
                </div>
                <div className="col-lg-6">
                <img className="w-50" src="/images/front.jpg" style={{borderRadius: 50}} alt="" />
                </div>
            </div>
            </div>
        </section>
        <section className="white-section" id="features">
            <div className="container-fluid">
            <div className="row">
                <div className="feature-box col-lg-4">
                <img className="icon" src="images/ico3.jpg" alt="Graph" />
                <h3 className="feature-title">Health</h3>
                <p>A large share of population suffer with some mental health disorder.</p>
                </div>
                <div className="feature-box col-lg-4">
                <img className="icon" src="images/types.jpeg" alt="Graph" />
                <h3 className="feature-title">Observations</h3>
                <p>The different kinds of mental health disorders.</p>
                </div>
                <div className="feature-box col-lg-4">
                <img className="icon" src="images/graph8.png" alt="Graph" />
                <h3 className="feature-title">Self Care</h3>
                <p>Mental health.</p>
                </div>
            </div>
            </div>
        </section>
        <Jumbotron fluid>
          <Container>
            <h1>Informational Videos</h1>
            <p>
              These videos are helpful in tackling mental health problems.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row style={{margin: '20px'}}>
          <Video url="https://youtu.be/IzFObkVRSV0" />
          </Row>
        </Container>
        <Container>
          <Row style={{margin: '20px'}}>
          <Video url="https://youtu.be/z-IR48Mb3W0" />
          </Row>
        </Container>
        <Container>
          <Row style={{margin: '20px'}}>
          <Video url="https://youtu.be/b_n9qegR7C4"/>
          </Row>
        </Container>
        
        
        <Jumbotron fluid>
          <Container>
          </Container>
        </Jumbotron>
        <Carousel>
          <Carousel.Item>
            <Container>
              <img
              src="\images\graph7.jpg"
              alt="Second slide"
            />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img
              className="w-50"
              src="\images\graph6.jpg"
              alt="Third slide"
            />
            </Container>
            

          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <img
              className="w-50"
              src="\images\graph1.jpeg"
              alt="Second slide"
            />
            </Container>
            

          </Carousel.Item>
        </Carousel>
        <Jumbotron>
        </Jumbotron>
        </div>
    )
}

export default HomeBody;
