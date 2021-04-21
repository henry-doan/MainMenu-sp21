import { Component } from "react";
import axios from "axios";
import { Card, Image, Container } from "react-bootstrap";
import { Tst, Tl } from "../shared/StyledComponents";

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
    const { id, name, description, image, price } = this.props;
    return (
      <>
        <Container>
          <Tst style={{ width: "15rem" }}>
            <Card.Img variant="top" src={image} />
            <Tl>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
              </Card.Body>
            </Tl>
          </Tst>
        </Container>
      </>
    );
  }
}

export default Item;