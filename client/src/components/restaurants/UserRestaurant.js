// // import { Component, useContext } from "react";
// // import { AuthContext } from "../providers/AuthProvider";
// // import axios from "axios";
// // import RestaurantList from "./RestaurantList";
// // import RestaurantForm from "./RestaurantForm";
// // import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "./StyledComponents";
// // import { Container, Card } from "react-bootstrap";


// // class Dashboard extends Component {
// //   state = { restaurants: [] };
// //   componentDidMount() {
// //     const { userId } = this.props.location.state
// //     axios
// //       .get(`/api/users/${userId}/restaurants/`)
// //       .then((res) => {
// //         this.setState({ restaurants: res.data });
// //       })
// //       .catch((err) => console.log(err));
// //   }

// //   renderRestaurants = () => {
// //     return this.state.restaurants.map((restaurant) => (
// //       <Restaurant key={restaurant.id} {...restaurant} />
// //     ));
// //   };

// //   render() {
// //     const { restaurants } = this.state
// //     const { name, description, image}
// //     return (
// //       <>
// //         <HomeImgCont>
// //           <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
// //           <H3>My Menus</H3>
// //           <Tst style={{ width: "15rem" }}>
// //             <Card.Img variant="top" src={image} />
// //             <Tl>
// //               <Card.Body>
// //                 <Card.Title>{name}</Card.Title>
//                     <Card.Text>{description}</Card.Text>
// //               </Card.Body>
// //             </Tl>
// //           </Tst>
// //           <br></br>
// //           <h3>My Favorites</h3>
// //         </HomeImgCont>
// //       </>
// //     );
// //   }
// // }





// //   export default Dashboard;



