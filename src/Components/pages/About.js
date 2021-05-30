import React from 'react';
import Footer from '../Footer';
import {Container,Media} from 'react-bootstrap';
import './About.css'
function About() {
    return (
        <>
        <Container style={{padding: "40px 40px"}}>
        <Media>
        <img
            width={300}
            height={270}
            className="mr-3"
            src="images/sandeep.jpg"
            alt="Generic placeholder"
            style={{borderRadius:"100%"}}
        />
        <Media.Body>
            <h2>Sandeep</h2>
            <p className="text">
            Hey there!!
            I am Sandeep , a 2rd year undergraduate student in the Electrical and Electronics Department(EEE) at BIT Mesra,Ranchi.
            </p>
            <br/>You can contact me through :-
            <br></br>
            Email: sandeeepkumaar.0034@gmail.com
            <br></br>
            LinkedIn:<a href=" https://www.linkedin.com/in/sandeep-kumar-82832a154/"> https://www.linkedin.com/in/sandeep-kumar-82832a154/</a>
            <br></br>
            Github:  <a href="https://github.com/sand-storm-17">https://github.com/sand-storm-17</a>
            
        </Media.Body>
        </Media>
        </Container>
        <Container style={{padding: "40px 40px"}}>
        <Media>
        <img
            height={300}
            width={300}
            src="images/pranav.jpg"
            alt="Generic placeholder"
            style={{borderRadius:"100%"}}
        />
        <Media.Body>
            <h2>Pranav</h2>
            <p className="text">
            Hi
            I'm Pranav, a 2rd year undergraduate student in the Electrical and Electronics Department(EEE) at BIT Mesra,Ranchi.
            </p>
            <br/>You can contact me through :-
            <br></br>
            Email: pprakhar2019@gmail.com
            <br></br>
            LinkedIn:<a href="https://www.linkedin.com/in/pranav-prakhar/" >https://www.linkedin.com/in/pranav-prakhar/</a> 
            <br></br>
            Github: <a href="https://github.com/drstark007">https://github.com/drstark007</a>
        </Media.Body>
        </Media>
        </Container>
        <Container style={{padding: "40px 40px"}}>
        <Media>
        <img
            width={250}
            height={250}
            className="mr-3"
            src="images/shanu.jpg"
            alt="Generic placeholder"
            style={{borderRadius:"100%"}}
        />
        <Media.Body>
            <h2>Shanu</h2>
            <p className="text">
            Hi
            I'm Shanu a 2rd year undergraduate student in the Information and Technology Department(IT) at BIT Mesra,Ranchi.
            </p>
            <br/>You can contact me through :-
            <br></br>
            Email: shanukrsinghhis@gmail.com
            <br></br>
            LinkedIn:<a href="https://www.linkedin.com/in/shanu-kumar-singh-8ba590106" >https://www.linkedin.com/in/shanu-kumar-singh-8ba590106</a>
            <br></br>
            Github: <a href="https://github.com/shanukrsingh">https://github.com/shanukrsingh</a>
            <br></br>
        </Media.Body>
        </Media>
        </Container>
        
        
        <Footer/>
        </>
    )
}

export default About
