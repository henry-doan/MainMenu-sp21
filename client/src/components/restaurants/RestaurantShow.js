import {useState, useEffect} from 'react'
import axios from 'axios';
import {Image} from 'react-bootstrap'
// import Restaurants from '../restaurants/Restaurants'

const RestaurantShow = (props) => {
    const {id} = props.match.params;
    const {name, description} = props;

    const[restaurant, setRestaurant] =  useState({})

    useEffect(()=>{
        getRestaurant();
    },[])

    const getRestaurant = () =>{
        axios.get(`/api/restaurants/${id}`).then((res) =>{
            setRestaurant(res.data);
            console.log(restaurant)
        }).catch((err) =>{
            console.log(err);
        })
    }
  return (
    <div>
      <img src={restaurant.image}/>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.id}</p>
      
    </div>
  )
}

export default RestaurantShow
