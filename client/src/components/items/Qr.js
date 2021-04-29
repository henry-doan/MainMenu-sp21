import { Component } from "react";
import { QRImgCont, HomeIMG, H4, H5, } from "../shared/StyledComponents";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../images/Logo.png";

var React = require("react");
var QRCode = require("qrcode.react");

class Qr extends Component {
  state = { items: [] };
  id = this.props.match.params.id;

  render() {

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <H4>Scan code to view menu</H4>
              <br></br>
              <H4>
                <QRCode value={`/menus/${this.id}/customeritems`} />
              </H4>
              <br></br>
              <H5>{`/menus/${this.id}/customeritems`}</H5>
            </Col>
          </Row>
          <Row>
            <Col>{}
            </Col>
          </Row>
        </Container>
        <QRImgCont>
          <HomeIMG src={Logo} alt="MainMenu Logo" fluid />{" "}
        </QRImgCont>
      </>
    );
  }
}

export default Qr;

// import axios from "axios";
// import { Container } from "react-bootstrap";
// import { useContext, useState, useEffect } from "react";
// import { MenuContext } from "../../providers/MenuProvider";

// var React = require("react");
// var QRCode = require("qrcode.react");

// const Qr = () => {
//   const { menu } = useContext(MenuContext);
//   const [menus, setmenus] = useState([]);

//   useEffect(() => {
//     console.log(menu);
//     axios
//       .get("/api/menus")
//       .then((res) => setmenus(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <Container>
//         <h4>QR</h4>
//         <br></br>
//         <QRCode value={`/menus/${menu.id}/items`} />
//       </Container>
//     </>
//   );
// };

// export default Qr;
