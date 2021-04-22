import { Component } from "react";
import axios from "axios";
import { Card, Image, Container } from "react-bootstrap";
import { Tst, Tl, Btn } from "../shared/StyledComponents";
import MenuForm from './MenuForm';
import { Link } from "react-router-dom";

class Menu extends Component {
  state = { menu: [] };
  // id = this.props.match.params.id

  componentDidMount() {
    axios
      .get(`/api/menu/`)
      .then((res) => {
        this.setState({ menu: res.data });
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
    const { id, name, description, image } = this.props;
    return (
      <>
        <Tst style={{ width: "15rem" }}>
          <Card.Img variant="top" src={image} />
          <Tl>
            <Card.Body>
              <Card.Title>
                <Link to={`/menus/${id}/items`}>{name}</Link>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              {editing ? (
                <MenuForm {...this.props} toggleForm={this.toggleForm} />
              ) : (
                <Btn onClick={() => this.toggleForm()}>Edit</Btn>
              )}
              {/* <Btn onClick={() => deleteMenu(id)}>Delete</Btn> */}
            </Card.Body>
          </Tl>
        </Tst>
      </>
    );
  }
}

export default Menu;




// import React from 'react'
// import { Section, Photo} from '../shared/StyledComponents'
// const Menu = ({ items }) => {
//   return (
//     <Section>
//       {items.map((menuItem) => {
//         const { id, name, img, description } = menuItem
//         return (
//           <article key={id} className='menu-item'>
//             <Photo src={img} alt={name} />
//             <div className='item-info'>
//               <header>
//                 <h4>{name}</h4>
//               </header>
//               <p className='item-text'>{description}</p>
//             </div>
//           </article>
//         )
//       })}
//     </Section>
//   )
// }

// export default Menu
