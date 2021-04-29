import { Link } from "react-router-dom";
import { Btn, Container, HomeIMG, H4 } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";

const NoMatch = () => {
  return (
    <>
      <Container>
        <H4>
          <HomeIMG src={Logo} alt="MainMenu Logo" />
        </H4>
        <H4>404: PAGE CANNOT BE FOUND</H4>
        <H4>
          <Btn>
            <Link to="/">Return Home</Link>
          </Btn>
        </H4>
      </Container>
    </>
  );
};
export default NoMatch;
