import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "./StyledComponents";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Modal,
  CardGroup,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import { Btn, GrayBtn } from "../shared/StyledComponents";
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
  const { restaurant, deleteRestaurant, updateRestaurant } = useContext(
    RestaurantContext
  );
  const [restaurants, setrestaurants] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleHide = () => setToggle(false);

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
        <H3>Add a Restaurant</H3>
        <br></br>
        <RestaurantForm />
        <br></br>
        <H3>My Menus</H3>
        <br></br>
        <Container>
          <CardDeck>
            {restaurants.map((r) => (
              <>
                <Tst style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={r.image} />
                  <Tl>
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/restaurants/${r.id}/menus`}>{r.name}</Link>
                      </Card.Title>
                      <Card.Text>{r.description}</Card.Text>

                      <GrayBtn onClick={() => deleteRestaurant(r.id)}>
                        <Icon.Trash />
                      </GrayBtn>
                      <GrayBtn onClick={() => setToggle(!toggle)}>
                        <Icon.PencilSquare />
                      </GrayBtn>
                      <Modal show={toggle} onHide={handleHide}>
                        <Modal.Header closeButton>
                          <Modal.Title>Edit Restaurant</Modal.Title>
                        </Modal.Header>
                        <RestaurantForm restaurantProp={r} />
                        <br></br>
                      </Modal>
                    </Card.Body>
                  </Tl>
                </Tst>
              </>
            ))}
          </CardDeck>
        </Container>

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
