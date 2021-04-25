import { Component } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import { IMG, HomeImgCont, FormCont } from "../shared/StyledComponents";
import { Container } from "react-bootstrap";
import MenuForm from "./MenuForm";

class Menus extends Component {
  state = { menus: [] };
  id = this.props.match.params.id;
  componentDidMount() {
    console.log(this.props);
    axios
      // /api/restaurants/:restaurant_id/menus/
      .get(`/api/restaurants/${this.id}/menus/`)
      .then((res) => {
        this.setState({ menus: res.data });
      })
      .catch((err) => console.log(err));
  }
  addMenus = (restaurant_id, menu) => {
    axios.post(`/api/restaurants/${restaurant_id}/menus`, { menu } )
      // .post("/api/menus", { menu })
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: [...menus, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateMenu = (id, menu, history) => {
    axios
      .put(`/api/restaurants/${this.id}/menus/${id}`, { menu })
      .then((res) => {
        const menus = this.state.menus.map((m) => {
          if (m.id === id) {
            return res.data;
          }
          return m;
        });
        this.setState({ menus })
        history.push('/restaurants')
      })
      .catch((err) => console.log(err));
  };
  deleteMenu = (id) => {
    axios
      .delete(`/api/restaurants/${this.id}/menus/${id}`)
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: menus.filter((m) => m.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { menus, history } = this.state;
    return (
      <>
        <HomeImgCont>
          <h4>Menus</h4>
          <br></br>
          <h4>Add a Menu</h4>
          <FormCont>
            <MenuForm />
          </FormCont>
          <br></br>
          <MenuList
            menus={menus}
            deleteMenu={this.deleteMenu}
            updateMenu={this.updateMenu}
            history={history}
          />
        </HomeImgCont>
      </>
    );
  }
}
export default Menus;
