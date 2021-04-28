import React from 'react'
import { Link } from "react-router-dom";
import {Container, Card} from 'react-bootstrap';
import { Btn, HomeIMG, H4, P } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";
import profilepic from '../images/profilepic.jpg';
import paragliding from '../images/paragliding.jpg';

const About = () => {
  return (
    <>
      <Container>
        <H4>
          <HomeIMG src={Logo} alt="MainMenu Logo" />
        </H4>
        <H4>About Us</H4>
        <div>
          <H4>
            Developing apps since our modest beginnings in 2021 with a little space on Zoom.
            </H4>
            <br></br>
          <p>
            Our development team consists of LuLu DeHaan, Skyler Burningham, and Britt Argyle.
          </p>
          <H4>LuLu</H4>
          <p>I'm LuLu, and I'm a teacher from Washington. Over the last few weeks, I helped develop the MainMenu app with my helpful teammates. 
             My favorite part of developing this app was working on the QR feature. I also focused on the add/edit/delete functions 
             throughout the app. In my spare time I enjoy gardening, painting, and hanging out with my family. </p>
        </div>

        <div>
          <h4>Britt</h4>
           <img style={{width:"200px"}}src={paragliding} alt="Flying High" />
          <p>
           
          </p>
        </div>

        <Card.Body>
          
          <Card.Title>Skylar</Card.Title>
          <img style={{width:"200px"}}src={profilepic} alt="sky" />
          <p>I am in the transition of moving my life from good ol' Oregon to Utah

          </p>
        </Card.Body>
        <H4>
          <Btn>
            <Link to="/">Back to Dashboard</Link>
          </Btn>
        </H4>
      </Container>
    </>
  );
};
export default About;