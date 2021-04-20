import { IMG, HomeImgCont, HomeIMG, H3, Tl, Tst } from "./StyledComponents";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import Logo from "../images/Logo.png";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import RestaurantForm from '../restaurants/RestaurantForm'
//import Restaurants from "../../components/restaurants/Restaurants";

const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <>
      <HomeImgCont>
        <HomeIMG src={Logo} alt='MainMenu Logo' fluid />
        <div>
          <RestaurantForm />
        </div>
        <H3>My Menus</H3>
        <p>{user.name}</p>
        <Tst style={{ width: '15rem' }}>
          <Card.Img variant='top' src={Logo} />
          <Tl>
            <Card.Body>
              <Link to='/restaurants/'>Restaurant</Link>
            </Card.Body>
          </Tl>
        </Tst>
        <br></br>
        <h3>My Favorites</h3>
      </HomeImgCont>
    </>
  )
}

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
