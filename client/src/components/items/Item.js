import { Component } from "react";
import axios from "axios";
import { Card, Image, Container } from "react-bootstrap";
import { Tst, Tl, GrayBtn } from "../shared/StyledComponents";
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
          <Tst style={{ width: "fluid", height: "fluid" }}>
            {/* <Card.Img variant="top" src={image} /> */}
            <Tl>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                {editing ? (
                  <ItemForm {...this.props} toggleForm={this.toggleForm} />
                ) : (
                  <GrayBtn onClick={() => this.toggleForm()}>
                    <Icon.PencilSquare />
                  </GrayBtn>
                )}
                <GrayBtn onClick={() => deleteItem(id)}>
                  <Icon.Trash />
                </GrayBtn>
              </Card.Body>
            </Tl>
          </Tst>
        </Container>
      </>
    );
  }
}

export default Item;
