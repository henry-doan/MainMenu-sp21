import { Component } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import { Tst } from "styled-components";
import { Container } from "react-bootstrap";

class Items extends Component {
  state = { items: [] };
  id = this.props.match.params.id;
  componentDidMount() {
    console.log(this.props);
    axios
    // /api/restaurants/:restaurant_id/menus/
      .get(`/api/menus/${this.id}/items/`)
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((err) => console.log(err));
  }
  addItem = (item) => {
    axios
      .post("/api/items", { item })
      .then((res) => {
        const { items } = this.state;
        this.setState({ items: [...items, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateItem = (id, item) => {
    axios
      .put(`/api/menus/${this.id}/items/${id}`, { item })
      .then((res) => {
        const items = this.state.items.map((i) => {
          if (i.id === id) {
            return res.data;
          }
          return i;
        });
        this.setState({ items });
      })
      .catch((err) => console.log(err));
  };
  deleteItem = (id) => {
    axios
      .delete(`/api/menus/${this.id}/items/${id}`)
      .then((res) => {
        const { items } = this.state;
        this.setState({ items: items.filter((i) => i.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <Container>
          <h4>Items From Menu</h4>
          <br></br>
        </Container>
        <ItemList
          items={items}
          deleteItem={this.deleteItem} 
          updateItem={this.updateItem}
        />
      </>
    );
  }
}
export default Items;
