// import React, { useState } from 'react';
// import Menu from './Menu';
// import items from '../data';
// import MenuForm from './MenuForm';
// import Logo from "../images/Logo.png";
// import { IMG, HomeImgCont, HomeIMG } from "../shared/StyledComponents";

// const  Menus= () => {
// const [menuItems, setMenuItems] = useState(items);
//   return (
    
//     <main>
//       <MenuForm />
//       <section className='menu section'>
//         <div className='name'>
//           <h2>MainMenu</h2>
//           <div className='underline'></div>
//         </div>
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   )
// }

// export default Menus

import { Component } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import { Tst } from "styled-components";
import { Container } from "react-bootstrap";
import MenuForm from './MenuForm';

class Menus extends Component {
  state = { menus: [] };
  id = this.props.match.params.id;
  componentDidMount() {
    console.log(this.props);
    axios
    // /api/restaurants/:restaurant_id/menus/
      .get(`/api/restaurants/${this.id}/menus/`)
      .then((res) => {
        this.setState({ menus: res.data });
      })
      .catch((err) => console.log(err));
  }
  addMenus = (menu) => {
    axios
      .post("/api/menus", { menu })
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: [...menus, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateMenu = (id, menu) => {
    axios
      .put(`/api/restaurants/${this.id}/menus/${id}`, { menu })
      .then((res) => {
        const menus = this.state.menus.map((m) => {
          if (m.id === id) {
            return res.data;
          }
          return m;
        });
        this.setState({ menus });
      })
      .catch((err) => console.log(err));
  };
  deleteMenu = (id) => {
    axios
      .delete(`/api/restaurants/${this.id}/menus/${id}`)
      .then((res) => {
        const { menus } = this.state;
        this.setState({ menus: menus.filter((m) => m.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { menus } = this.state;
    return (
      <>
        <Container>
          <h4>Menus</h4>
          <br></br>
        </Container>
        <MenuForm />
        <MenuList
          menus={menus}
          deleteMenu={this.deleteMenu} 
          updateMenu={this.updateMenu}
        />
      </>
    );
  }
}
export default Menus;
