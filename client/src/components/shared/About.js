import React from 'react'
import { Link } from "react-router-dom";
import {Container, CardDeck} from 'react-bootstrap';
import { Btn, HomeIMG, H4, IMG1, P, Tst1, Tl1, ItemH, ItemT } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";
import profilepic from '../images/profilepic.jpg';
import paragliding from '../images/paragliding.jpg';
import LuLuD from '../images/LuLuD.jpeg';

const About = () => {
  return (
    <>
      <Container>
    <CardDeck>
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
      <Tst1>
          <Tl1>
            <ItemH style={{marginLeft: "20px", fontSize: "40px"}}>LuLu</ItemH>
            <IMG1 style={{ width: "200px", margin: "20px" }} src={LuLuD} alt="garden" />
            <ItemT style={{paddingTop: "15px"}}>
              I'm LuLu, and I'm a teacher from Washington. Over the last few
              weeks, I helped develop the MainMenu app with my helpful
              teammates. My favorite part of developing this app was working on
              the QR feature. I also focused on the add/edit/delete functions
              throughout the app. In my spare time I enjoy gardening, painting,
              and hanging out with my family and pets.
            </ItemT>
          </Tl1>
          </Tst1>
        </div>
        <br></br>
        <div>
          <Tst1>
            <Tl1>
              <ItemH style={{marginLeft: "20px", fontSize: "40px"}}>Britt</ItemH>
                <IMG1 style={{ width: "200px", margin: "20px" }} src={paragliding} alt="Flying High" />
                <ItemT style={{paddingTop: "15px"}}>
                  I’m Britt, I have enjoyed the struggle of developing the MainMenu app. 
                  Without the help of my support group, Skylar and Lulu none of this would have been possible. 
                </ItemT>
              </Tl1>
          </Tst1>
        </div>
        <br></br>
        <div>
        <Tst1>
          <Tl1>
            <ItemH style={{marginLeft: "20px", fontSize: "40px"}}>Skylar</ItemH>
            <IMG1 style={{ width: "200px", margin: "20px" }} src={profilepic} alt="sky" />
            <ItemT style={{paddingTop: "15px"}}>
              Helloooo my name is Skylar, Currently I am a Maintenance Director, 
              living the dream one day at a time. 
              I am in the transition of moving my life from good ol' Oregon to
              Utah, where I can become a true Web Developer! I enjoy long walks
              on the beach and laying in a field of flowers, daydreaming what life
              will be like as a full time Web Dev.
            </ItemT>
          </Tl1>
        </Tst1>
        </div>
        <div>
          <Btn style={{marginTop:"50px", marginLeft: "15px", marginBottom:"100px", display: "flex", flexDirection: "right"}}>
            <Link style={{color:"black"}} to="/">Back to Dashboard</Link>
          </Btn>
          
        </div>
        </CardDeck>
      </Container>
    </>
  );
};
export default About;