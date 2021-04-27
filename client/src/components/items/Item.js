import { Component } from "react";
import axios from "axios";
import { Card, Image, Container, Media } from "react-bootstrap";
import { Tst, Tl, GrayBtn, Cards } from "../shared/StyledComponents";
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
          <Media>
          <Tst style={{ width: "fluid", height: "fluid" }}>
            <img 
              width={100}
              height={100}
              className="mr-3"
              src={image}
              alt="Generic placeholder"  />
            <Tl>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Cards.Text>{price}</Cards.Text>
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
          </Media>
        </Container>
      </>
    );
  }
}

export default Item;
