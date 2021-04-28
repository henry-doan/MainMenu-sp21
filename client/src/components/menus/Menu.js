import { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import {
  Tst1,
  Tl1,
  ItemH,
  ItemT,
  IMG1,
  Btn,
  GrayBtn1,
} from "../shared/StyledComponents";
import MenuForm from "./MenuForm";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

class Menu extends Component {
  state = { menu: [] };
  // id = this.props.match.params.id

  componentDidMount() {
    axios
      .get(`/api/menus/`)
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
    const { id, name, description, image, deleteMenu } = this.props;
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
              <ItemH>
                <Link to={`/menus/${id}/items`}>{name}</Link>
              </ItemH>
              <ItemT>{description}</ItemT>
              {editing ? (
                <MenuForm {...this.props} toggleForm={this.toggleForm} />
              ) : (
                <GrayBtn1 onClick={() => this.toggleForm()}>
                  <Icon.PencilSquare />
                </GrayBtn1>
              )}
              <GrayBtn1 onClick={() => deleteMenu(id)}>
                <Icon.Trash />
              </GrayBtn1>
              <GrayBtn1>
                <Link to={`/menus/${id}`}>Generate QR</Link>
              </GrayBtn1>
            </Tl1>
          </Tst1>
        </Container>
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
