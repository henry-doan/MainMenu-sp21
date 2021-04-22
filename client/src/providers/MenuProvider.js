import React, { Component } from "react";
import axios from "axios";

export const MenuContext = React.createContext();

export const MenuConsumer = MenuContext.Consumer;

class MenuProvider extends Component {
  state = { menus: [] };

  getAllMenus = (restaurant_id) => {
    axios
      .get(`/api/restaurants/${restaurant_id}/menus`)
      .then((res) => {
        this.setState({ menus: res.data });
      })
      .catch((err) => console.log(err));
  };

  addMenu = (restaurant_id, menu) => {
    axios
      .post(`/api/restaurants/${restaurant_id}/menus`, { menu })
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: [...menus, res.data] });
      })
      .catch((err) => console.log(err));
  };

  updateMenu = (restaurant_id, id, menu, history) => {
    axios
      .put(`/api/restaurants/${restaurant_id}/menus/${id}`, { menu })
      .then((res) => {
        const menus = this.state.menus.map((m) => {
          if (m.id === id) {
            return res.data;
          }
          return m;
        });
        this.setState({ menus: menus });
        history.push("/restaurants");
      })
      .catch((err) => console.log(err));
  };

  deleteMenu = (restaurant_id, id, history) => {
    axios
      .delete(`/api/restaurants/${restaurant_id}/menus/${id}`)
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: menus.filter((m) => m.id !== id) });
        history.push("/restaurants");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          ...this.state,
          getAllMenus: this.getAllMenus,
          addMenu: this.addMenu,
          updateMenu: this.updateMenu,
          deleteMenu: this.deleteMenu,
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

export default MenuProvider;
