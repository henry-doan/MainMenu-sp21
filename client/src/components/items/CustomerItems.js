import { Component } from "react";
import axios from "axios";
import { Card, Image, Container, Media } from "react-bootstrap";
import { Tst1, ItemH, ItemT, IMG1, Tl, Tl1, GrayBtn1, Cards, Price } from "../shared/StyledComponents";
import * as Icon from "react-bootstrap-icons";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList"
class CustomerItems extends Component {
  state = { item: [] };
  id = this.props.match.params.menu_id

  componentDidMount() {
    axios
      .get(`/api/menus/${this.id}/items`)
      .then((res) => {
        this.setState({ item: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { id, name, description, image, price, deleteItem } = this.props;
    return (
      <>
        <h4>Menu Items</h4>
      {this.state.item.map((i) =>
      (
        <Container>
          
          <Tst1 style={{ width: "fluid", height: "fluid" }}>
          <Tl1>
            <IMG1 
              width={200}
              height={200}
              src={i.image}
              alt="Generic placeholder"  />
            <ItemH>{i.name}</ItemH>
            <ItemT>{i.description}</ItemT>
            <Price>{i.price}</Price>
            </Tl1>
          </Tst1>
        </Container>
      )
      )
      }
      </>
    );
  }
}

export default CustomerItems;
