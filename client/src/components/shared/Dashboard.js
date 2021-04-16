import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "./StyledComponents";
import { Card } from "react-bootstrap";
import Logo from "../images/Logo.png";
import axios from "axios";
//import { useEffect, useState } from "react";
//import Restaurants from "../../components/restaurants/Restaurants";

const Dashboard = () => (

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

export default Dashboard;


 // const Restaurants = () => {
  //   const [restaurants, setRestaurants] = useState([]);

  //   useEffect(() => {
  //     getRestaurants();
  //   }, []);
  
  //   const getRestaurants = () =>{
  //     axios.get(`/api/users/${user.id}/restaurants`).then((res) => {
  //       setRestaurants(res.data);
  //     }).catch((error) => {
  //       alert(error)
  //     })
  //   }

  //   const renderRestaurants = () =>{
  //     return restaurants.map((restaurant) => (
  //       <>
  //         <h1>dashboard</h1>
  //       </>
  //     ))
  //   }

  //   return (
  //     {renderRestaurants()}
  //   ),
