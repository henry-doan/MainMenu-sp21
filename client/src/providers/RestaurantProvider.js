import axios from "axios";
import React, { Component } from "react";

export const RestaurantContext = React.createContext();
export const RestaurantConsumer = RestaurantContext.Consumer;

class RestaurantProvider extends Component {
  state = { restaurants: [] };

  componentDidMount() {
    axios
      .get("/api/restaurants")
      .then((res) => {
        this.setState({ restaurants: res.data });
      })
      .catch((err) => {
        //
      });
  }

  addRestaurant = (restaurant) => {
    axios
      .post("/api/restaurants", { restaurant })
      .then((res) => {
        const { restaurants } = this.state;
        this.setState({ restaurants: [...restaurants, res.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateRestaurant = (id, restaurant, history) => {
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
        history.push("/restaurants");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteRestaurant = (id, history) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then((res) => {
        const { restaurants } = this.state;
        this.setState({ restaurants: restaurants.filter((r) => r.id !== id) });
        history.push("/restaurants");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <RestaurantContext.Provider
        value={{
          ...this.state,
          addRestaurant: this.addRestaurant,
          updateRestaurant: this.updateRestaurant,
          deleteRestaurant: this.deleteRestaurant,
        }}
      >
        {this.props.children}
      </RestaurantContext.Provider>
    );
  }
}

export default RestaurantProvider;
