import { HomeImgCont, HomeIMG, H3, Tl, Tst, Footer, P, LinkColor } from "./StyledComponents";
import {Card, Container, Modal, CardDeck} from "react-bootstrap";
import { GrayBtn } from "../shared/StyledComponents";
import Logo from "../images/Logo.png";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { RestaurantContext } from "../../providers/RestaurantProvider";
import * as Icon from "react-bootstrap-icons";
import RestaurantForm from "../restaurants/RestaurantForm";
import FavoriteList from '../restaurants/FavoriteList';

const Dashboard = (props) => {
  const { user } = useContext(AuthContext);
  const {deleteRestaurant, updateRestaurant } = useContext(RestaurantContext);
  const [favoriteRestaurant] = useState({});
  const [editRestaurant, setEditRestaurant] = useState({});
  const [restaurants, setrestaurants] = useState([]);
  const [toggle, setToggle] = useState(false);
  
  const handleHide = () => setToggle(false);

  useEffect(() => {
    console.log(user);
    axios
      .get("/api/restaurants")
      .then((res) => setrestaurants(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleEdit = (restaurant) => {
    setToggle(!toggle);
    setEditRestaurant(restaurant);

  }
  const addRestaurant = (restaurant) =>{
    //axios call here

  }
  const handleFavorite = (r) =>{
    // setFav(!fav)
    let fav = !r.favorite
    console.log("favorite rest", favoriteRestaurant)
    //axios call put
    updateRestaurant(r.id, {...r, favorite: fav}, props.history )
    // window.location.reload();
  }

  return (
    <>
      <HomeImgCont>
        <HomeIMG src={Logo} alt="MainMenu Logo" fluid />
        {/* <h2>Welcome, {user.name || user.user.name}</h2> */}
        <br></br>
        <br></br>
        <H3>Add a Restaurant</H3>
        <br></br>
        <RestaurantForm addRestaurant={addRestaurant} />
        <br></br>
        <H3>My Restaurants</H3>
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
                        <LinkColor to={`/restaurants/${r.id}/menus`}>{r.name}</LinkColor>
                      </Card.Title>
                      <Card.Text>{r.description}</Card.Text>
                      <GrayBtn onClick={() => deleteRestaurant(r.id)}>
                        <Icon.Trash />
                      </GrayBtn>
                      <GrayBtn onClick={() => handleEdit(r)}>
                        <Icon.PencilSquare />
                      </GrayBtn>
                        <GrayBtn
                          onClick={() => {
                            handleFavorite(r)
                          }}
                        >
                          <Icon.Star />
                        </GrayBtn>
                    </Card.Body>
                  </Tl>
                </Tst>
              </>
            ))}
          </CardDeck>
        </Container>
        <Modal show={toggle} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Restaurant</Modal.Title>
          </Modal.Header>
          <RestaurantForm restaurantProp={editRestaurant} />
          <br></br>
        </Modal>
        <br></br>
        <H3>My Favorites</H3>
        <br></br>
        <Container>
        <FavoriteList  restaurants={restaurants}/>
        </Container>
        <Footer>
          <P>© Copyright all rights reserved</P>
        </Footer>
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
