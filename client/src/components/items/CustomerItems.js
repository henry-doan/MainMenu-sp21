import { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Tst1, ItemH, ItemT, IMG1, Tl1, Price } from "../shared/StyledComponents";

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
          <br></br>
        </Container>
      )
      )
      }
      </>
    );
  }
}

export default CustomerItems;
