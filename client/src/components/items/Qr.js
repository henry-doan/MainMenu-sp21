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
                <QRCode value={`https://main-menu.herokuapp.com/menus/${this.id}/customeritems`} />
              </H4>
              <br></br>
              <H5>{`https://main-menu.herokuapp.com/menus/${this.id}/customeritems`}</H5>
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
