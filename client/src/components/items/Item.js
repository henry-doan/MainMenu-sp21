import { Component } from "react";
import axios from "axios";
import { Card, Image, Container, Media } from "react-bootstrap";
import {
  Tst1,
  ItemH,
  ItemT,
  IMG1,
  Tl,
  Tl1,
  GrayBtn1,
  Cards,
  Price,
} from "../shared/StyledComponents";
import * as Icon from "react-bootstrap-icons";
import ItemForm from "./ItemForm";

class Item extends Component {
  state = { item: [] };
  // id = this.props.match.params.id

  componentDidMount() {
    axios
      .get(`/api/item/`)
      .then((res) => {
        this.setState({ item: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  state = { editing: false };
  toggleForm = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  render() {
    const { editing } = this.state;
    const { id, name, description, image, price, deleteItem } = this.props;
    return (
      <>
      
        <Container>
          <Tst1 style={{ width: "fluid", height: "fluid" }}>
            <Tl1>
              <IMG1
                width={200}
                height={200}
                src={image}
                alt="Generic placeholder"
              />
              <ItemH>{name}</ItemH>
              <ItemT>{description}</ItemT>
              <Price>{price}</Price>
              {editing ? (
                <ItemForm {...this.props} toggleForm={this.toggleForm} />
              ) : (
                <GrayBtn1 onClick={() => this.toggleForm()}>
                  <Icon.PencilSquare />
                </GrayBtn1>
              )}
              <GrayBtn1 onClick={() => deleteItem(id)}>
                <Icon.Trash />
              </GrayBtn1>
            </Tl1>
          </Tst1>
        </Container>
      </>
    );
  }
}

export default Item;
