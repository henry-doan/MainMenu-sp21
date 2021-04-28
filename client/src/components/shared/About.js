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
        <div>
          <H4>
            Developing apps since our modest beginnings in 2021 with a little
            space on Zoom.
          </H4>
          <P>
            Our development team consists of LuLu DeHaan, Skylar Burningham, and
            Britt Argyle.
          </P>
          <Card.Body>
            <Card.Title>LuLu</Card.Title>
            <Card.Text>
              I'm LuLu, and I'm a teacher from Washington. Over the last few
              weeks, I helped develop the MainMenu app with my helpful
              teammates. My favorite part of developing this app was working on
              the QR feature. I also focused on the add/edit/delete functions
              throughout the app. In my spare time I enjoy gardening, painting,
              and hanging out with my family and pets.
            </Card.Text>
          </Card.Body>
        </div>
        <br></br>
        <div>
          <Card.Body>
          <Card.Title>Britt</Card.Title>
          <img style={{ width: "200px" }} src={paragliding} alt="Flying High" />
            <p>
              I’m Britt, I have enjoyed the struggle of developing the MainMenu app. 
              Without the help of my support group, Skylar and Lulu none of this would have been possible. 
            </p>
            </Card.Body>
        </div>

        <Card.Body>
          <Card.Title>Skylar</Card.Title>
          <img style={{ width: "200px" }} src={profilepic} alt="sky" />
          <Card.Text>
            Helloooo my name is Skylar, Currently I am a Maintenance Director, 
            living the dream one day at a time. 
            I am in the transition of moving my life from good ol' Oregon to
            Utah, where I can become a true Web Developer! I enjoy long walks
            on the beach and laying in a field of flowers daydreaming what life
            will be like as a full time Web Dev.
          </Card.Text>
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