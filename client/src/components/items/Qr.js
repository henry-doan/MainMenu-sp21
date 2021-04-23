import { Component } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import { Tst } from "styled-components";
import { Container } from "react-bootstrap";

var React = require("react");
var QRCode = require("qrcode.react");

class Qr extends Component {
  state = { items: [] };
  id = this.props.match.params.menu_id;

  render() {
    const { items } = this.state;
    return (
      <>
        <Container>
          <h4>QR</h4>
          <br></br>
          <QRCode value={`/menus/${this.id}/items`} />
        </Container>
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
