import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron,Container, Row,CardGroup, Card,Button} from 'react-bootstrap';
import Video from './Video';

function HomeBody() {
    return (
      <div>
      <section className="colored-section" id="title">
        <div className="container-fluid">
          {/* Title */}
          <div className="row top-off">
            <div className="col-lg-6">
              <h1 className="big-heading">Worried about your mental health?</h1>
              <div style={{textAlign: 'center', fontSize:'20px', padding: "20px 10px 20px 10px"}}>We here at mentopia are more than happy to guide you.</div>
            </div>
            <div className="col-lg-6">
              <img className="title-image w3-animate-top" src="images/img6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <section class="colored-section" id="testimonials"> */}
      <Container  style={{padding: '80px 0px 50px 0px'}}>
        <Carousel>
          <Carousel.Item>
            <Container>
            <img className="d-block w-100" src="images/panic2.jpg" alt="Second slide" />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img className="d-block w-100" src="images/panic3.jpg" alt="Third slide" />
            </Container>
            

          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img className="d-block w-100" src="images/panic4.jpg" alt="Third slide" />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img className="d-block w-100" src="images/panic1.jpg" alt="Third slide" />
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Jumbotron fluid>
          <Container>
            <h1>Informational Videos</h1>
            <p>
              These videos are helpful in tackling mental health problems.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row style={{marginBottom: '20px'}}>
            <Video url="https://youtu.be/IzFObkVRSV0" />
          </Row>
          <Row><Video url="https://youtu.be/RrWBhVlD1H8" /></Row>
        </Container>
        
        <Jumbotron style={{marginTop: '70px'}}>
          <Container >
            <h1>Recent Studies</h1>
          </Container>
        </Jumbotron>
      {/* recent studies */}
        <Container>


        </Container>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Statistics of 2017 India</Card.Title>
              <Card.Text>
              In 2017, there were 197·3 million (95% UI 178·5–216·4) 
              people with mental disorders in India, comprising 
              14·3% of the total population of the country. Mental 
              disorders contributed 4·7% (3·7–5·6) of the total DALYs 
              in India in 2017, compared with 2·5% (2·0–3·1) in 1990.24
              YLDs made up all the DALYs from mental disorders in 
              2017, except eating disorders, for which YLDs made up 
              99·8% of the DALYs. Mental disorders were the leading 
              cause of YLDs in India, contributing 14·5% of the total 
              YLDs in 2017.24 The highest contribution to DALYs due to
              mental disorders in India in 2017 was from depressive 
              disorders (33·8%, 29·5–38·5) and anxiety disorders 
              (19·0%, 15·9–22·4), followed by IDID (10·8%, 6·3–15·9), 
              schizophrenia (9·8%, 7·7–12·4), bipolar disorder (6·9%, 
              4·9–9·6), and conduct disorder (5·9%, 4·0–8·1; table 1). 
              The contribution of depressive disorders and eating 
              disorders to the total DALYs was substantially higher in 
              females than in males, whereas the contribution of autism 
              spectrum disorders and ADHD was significantly higher 
              in males than in females.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Impact of Covid-19</Card.Title>
              <Card.Text>
              Young adults have experienced a number of pandemic-related consequences, such as closures of universities and loss of income, that may contribute to poor mental health. During the pandemic, a larger than average share of young adults (ages 18-24) report symptoms of anxiety and/or depressive disorder (56%). Compared to all adults, young adults are more likely to report substance use (25% vs. 13%) and suicidal thoughts (26% vs. 11%).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Mental Health of College Students</Card.Title>
              <Card.Text>
              In general, depression was found to be prevalent in about 48.30% of the students, whereas anxiety was prevalent in 50% of these students. Out of these, 26.75% of them were between borderline and extreme stage of depression which requires clinical attention. These findings were consistent with other similar studies. A study was conducted among the students of the Punjab University, Chandigarh in 2014, which showed the overall prevalence of depression, anxiety, and stress to be 59.3%, 86.5%, and 52.8%, respectively, higher than that of ours, whereas a study carried out in Karnataka in 2012 depicted an overall prevalence of depression to be 71.25%. Among those, a majority (80%) had mild and moderate degree of depression. The prevalence of severe and profound depression was 7.5% and 6.7%, respectively.[13] Furthermore, a study conducted in Jhansi, Uttar Pradesh, in the year 2016 revealed that depression was 57% prevalent, whereas anxiety was 71%.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
        </CardGroup>
      {/* three buttons */}
      <section className="container text-center">
        <h4 className="mb-5"><strong></strong></h4>
        <div className="row">
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
                <img className="card_image icon" src="images/ml_matters.jpg" alt=""/>
                <a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30432-0/fulltext" target="_blank" rel="noreferrer">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  <Button variant="info">The Lancet</Button>{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img className="card_image icon" src="images/mind1.jpg" alt="" />
                <a href="https://www.who.int/health-topics/mental-health#tab=tab_1" target="_blank" rel="noreferrer">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  <Button variant="info">WHO</Button>{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img className="card_image icon" src="images/mind2.jpg" alt ="" />
                <a href="https://pharmeasy.in/blog/mental-health-illnesses-in-india/" target="_blank" rel="noreferrer">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  <Button variant="info">Pharmeasy</Button>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default HomeBody;
