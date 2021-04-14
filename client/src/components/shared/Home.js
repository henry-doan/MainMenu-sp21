import { IMG, HomeImgCont, HomeIMG } from "../shared/StyledComponents";
import { Card } from "react-bootstrap";
import Logo from "../images/Logo.png";

const Home = () => (
  <>
    <HomeImgCont>
      <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
      <h3>My Menus</h3>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>Restaurant</Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <h3>My Favorites</h3>
    </HomeImgCont>
  </>
);

export default Home;
