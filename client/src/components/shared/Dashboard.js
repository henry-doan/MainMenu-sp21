import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "./StyledComponents";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { Btn } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { RestaurantContext } from "../../providers/RestaurantProvider";
import * as Icon from "react-bootstrap-icons";
import RestaurantForm from "../restaurants/RestaurantForm";
import Restaurant from "../restaurants/Restaurant";

//import Restaurants from "../../components/restaurants/Restaurants";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { restaurant, deleteRestaurant } = useContext(RestaurantContext);
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    console.log(user);
    axios
      .get("/api/restaurants")
      .then((res) => setrestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <>
      <HomeImgCont>
        <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
        <h2>Welcome, {user.name || user.user.name}</h2>
        <br></br>
        <br></br>
        <RestaurantForm />
        <br></br>
        <H3>My Menus</H3>
        {restaurants.map((r) => (
          <>
            <Tst style={{ width: "15rem" }}>
              <Card.Img variant="top" src={r.image} />
              <Tl>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/restaurants/${r.id}`}>{r.name}</Link>
                  </Card.Title>
                  <Card.Text>{r.description}</Card.Text>

                  <Btn onClick={() => deleteRestaurant(r.id)}>
                    <Icon.Trash />
                  </Btn>
                  <Btn>
                    <Icon.PencilSquare />
                  </Btn>
                </Card.Body>
              </Tl>
            </Tst>
          </>
        ))}

        <br></br>
        <h3>My Favorites</h3>
      </HomeImgCont>
    </>
  );
};

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
