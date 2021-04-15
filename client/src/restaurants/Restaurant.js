import { Component } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap';
import { Tst, Tl } from '../components/shared/StyledComponents';
import Logo from '../components/images/Logo.png';

class Restaurant extends Component {
  state = { restaurant: [] };
  componentDidMount() {
    axios
      .get("/api/restaurant")
      .then((res) => {
        this.setState({ restaurant: res.data });
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
    const { id, name, description, image } = this.props;
    return (
      <>
        <Tst style={{ width: "15rem" }}>
          <Card.Img variant="top" src={Logo} />
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