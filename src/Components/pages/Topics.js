import React from 'react';
import Footer from '../Footer';
import {Container, Carousel, Row, Col} from 'react-bootstrap';
import Video from '../Video';

function Topics() {
    return (
        <>
        <Container  style={{padding: '80px 0px 50px 0px'}}>
        <Carousel>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=5l2RIOhDXvU"></Video></Col>
                    <Col><h3>Attention Deficit Hyperactivity Disorder (ADHD)</h3>
                    <p style={{fontSize:'20px'}}>ADHD is a developmental disorder defined by inattention (trouble staying on task, listening); disorganization (losing materials); and hyperactivity-impulsivity (fidgeting, difficulty staying seated or waiting).</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=BVJkf8IuRjE"></Video></Col>
                    <Col><h3>Anxiety Disorders</h3>
                    <p style={{fontSize:'20px'}}>Everyone can experience anxiety, but when symptoms are overwhelming and constant — often impacting everyday living — it may be an anxiety disorder.</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container  style={{padding: '80px 0px 50px 0px'}}>
        <Carousel>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=2stwx7qZw2I"></Video></Col>
                    <Col><h3>Bipolar Disorder</h3>
                    <p style={{fontSize:'20px'}}>Bipolar disorder causes dramatic shifts in a person's mood, energy and ability to think clearly. Individuals with this disorder experience extreme high and low moods, known as mania and depression. Some people can be symptom-free for many years between episodes.</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=MZ5r99SBLrs"></Video></Col>
                    <Col><h3>Depression</h3>
                    <p style={{fontSize:'20px'}}>Depression involves recurrent, severe periods of clear-cut changes in mood, thought processes and motivation lasting for a minimum of two weeks. Changes in thought processes typically include negative thoughts and hopelessness. Depression also involves affects sleep/energy, appetite or weight.</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container  style={{padding: '80px 0px 50px 0px'}}>
        <Carousel>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=2KXtlIX_yUs"></Video></Col>
                    <Col><h3>Posttraumatic Stress Disorder</h3>
                    <p style={{fontSize:'20px'}}>PTSD involves a set of physiological and psychological responses. It can occur in people who have experienced or witnessed a traumatic event such as a natural disaster, a serious accident, a terrorist act, rape, war/combat or something similar.</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=AecNqFk8glo"></Video></Col>
                    <Col><h3>Suicidal thoughts</h3>
                    <p style={{fontSize:'20px'}}>Suicidal thoughts, or suicide ideation, refers to thinking about or planning suicide. Thoughts can range from creating a detailed plan to having a fleeting consideration. It does not include the final act of suicide.</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container  style={{padding: '80px 0px 50px 0px'}}>
        <Carousel>
          <Carousel.Item>
            <Container>
                <Row>
                    <Col><Video url="https://www.youtube.com/watch?v=PrtFMbmoWPQ"></Video></Col>
                    <Col><h3>Schizophrenia</h3>
                    <p style={{fontSize:'20px'}}>Schizophrenia interferes with a person’s ability to think clearly, manage emotions, make decisions and relate to others. It also causes people to lose touch with reality, often in the form of hallucinations and delusions</p>
                    </Col>
                </Row>
            
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Footer></Footer>
      </>
    )
}

export default Topics
