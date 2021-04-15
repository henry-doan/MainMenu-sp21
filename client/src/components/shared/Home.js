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


// import {
//   IMG,
//   HomeImgCont,
//   HomeIMG,
//   H3,
//   Tl,
//   Tst,
// } from "../shared/StyledComponents";
// import { Card } from "react-bootstrap";
// import Logo from "../images/Logo.png";
// import { Component } from "react";
// import axios from "axios";

// class Home extends Component {
//   state = { restaurants: [] };

//   componentDidMount() {
//     axios
//       .get("/api/restaurants")
//       .then((res) => {
//         this.setState({ restaurants: res.data });
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     const { restaurants } = this.state;
//     const { name, description, image } = this.props;
//     return (
//       <HomeImgCont>
//         <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
//         <H3>My Menus</H3>
//         <Tst style={{ width: "15rem" }}>
//           <Card.Img variant="top" src={image} />
//           <Tl>
//             <Card.Body>
//               <Card.Title>{name}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//             </Card.Body>
//           </Tl>
//         </Tst>
//         <br></br>
//         <h3>My Favorites</h3>
//       </HomeImgCont>
//     );
//   }
// }

// export default Home;
