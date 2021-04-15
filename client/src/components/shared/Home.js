import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "../shared/StyledComponents";
import { Card } from "react-bootstrap";
import Logo from "../images/Logo.png";

const Home = () => (
  <>
    <HomeImgCont>
      <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
      <H3>My Menus</H3>
      <Tst style={{ width: "15rem" }}>
        <Card.Img variant="top" src={Logo} />
        <Tl>
        <Card.Body>
          
          <Card.Title>Restaurant</Card.Title>
          
        </Card.Body>
        </Tl>
      </Tst>
      <br></br>
      <h3>My Favorites</h3>
    </HomeImgCont>
  </>
);

export default Home;
