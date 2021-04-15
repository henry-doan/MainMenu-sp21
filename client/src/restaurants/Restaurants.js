import { Component } from "react";
import axios from "axios";
import RestaurantList from "./RestaurantList";
import RestaurantForm from "./RestaurantForm";
import { Tst } from 'styled-components';

class Restaurants extends Component {
  state = { restaurants: [] };
  componentDidMount() {
    axios
      .get("/api/restaurants")
      .then((res) => {
        this.setState({ restaurants: res.data });
      })
      .catch((err) => console.log(err));
  }
  addRestaurant = (restaurant) => {
    axios
      .post("/api/restaurants", { restaurant })
      .then((res) => {
        const { restaurants } = this.state;
        this.setState({ restaurants: [...restaurants, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateRestaurant = (id, restaurant) => {
    axios
      .put(`/api/restaurants/${id}`, { restaurant })
      .then((res) => {
        const restaurants = this.state.restaurants.map((r) => {
          if (r.id === id) {
            return res.data;
          }
          return r;
        });
        this.setState({ restaurants });
      })
      .catch((err) => console.log(err));
  };
  deleteRestaurant = (id) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then((res) => {
        const { restaurants } = this.state;
        this.setState({ restaurants: restaurants.filter((r) => r.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { restaurants } = this.state;
    return (
      <>
        <h4>Restaurants</h4>
        <RestaurantList
          restaurants={restaurants}
          deleteRestaurant={this.deleteRestaurant}
          updateRestaurant={this.updateRestaurant}
        />
      </>
    );
  }
}
export default Restaurants;
