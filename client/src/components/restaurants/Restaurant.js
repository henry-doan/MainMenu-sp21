import { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Tst, Tl } from "../shared/StyledComponents";

class Restaurant extends Component {
  state = { restaurant: [] };

  componentDidMount() {
    axios
      .get(`/api/restaurants/`)
      .then((res) => {
        this.setState({ restaurant: res.data });
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

    const { name, description, image } = this.props;
    return (
      <>
        <Tst style={{ width: "15rem" }}>
          <Card.Img variant="top" src={image} />
          <Tl>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Tl>
        </Tst>
      </>
    );
  }
}

export default Restaurant;

