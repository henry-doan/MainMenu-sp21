import { Form } from "react-bootstrap";
import { Btn } from "../shared/StyledComponents";
import { Component } from "react";

class MenuForm extends Component {
  state = { name: "", description: "", image: "" };

  componentDidMount() {
    if (this.props.id) {
      const { id, name, description, image } = this.props;
      this.setState({ id, name, description, image });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateMenu, id, toggleForm } = this.props;
      updateMenu(id, this.state);
      toggleForm();
    } else {
      this.props.addMenu(this.state);
    }
    this.setState({ name: "", description: "", image: "" });
  };
  render() {
    const { name, description, image } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Control
          size="sm"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        <br></br>
        <Form.Control
          size="sm"
          type="text-field"
          name="description"
          value={description}
          onChange={this.handleChange}
          required
          placeholder="Description"
        />
        <br></br>
        <Form.Control
          size="sm"
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
          required
          placeholder="Image URL..."
        />
        <br></br>
        <Btn type="submit">Submit</Btn>
      </Form>
    );
  }
}
export default MenuForm;

// import { useState, useContext } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { Btn } from "../shared/StyledComponents";
// import { RestaurantContext } from "../../providers/RestaurantProvider";

// const MenuForm = () => {
//   const { restaurant } = useContext(RestaurantContext);
//   const [menu, setMenu] = useState({ name: "", image: "", description: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMenu({ name: "", image: "", desc: "" });
//     axios
//       .post(`/api/restaurants/${restaurant.id}/menus`, {
//         name: menu.name,
//         description: menu.description,
//         image: menu.image,
//       })
//       .then((res) => {
//         // console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleChange = (e) => {
//     setMenu({
//       ...menu,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = (e) => {
//     //
//     axios
//       .put(`/api/restaurants/${restaurant.id}/menus`, {
//         name: menu.name,
//         description: menu.description,
//         image: menu.image,
//       })
//       .then((res) => {
//         // console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Control
//         size="sm"
//         placeholder="Name"
//         name="name"
//         value={menu.name}
//         onChange={handleChange}
//       />
//       <br></br>
//       <Form.Control
//         size="sm"
//         placeholder="Description"
//         name="description"
//         value={menu.desc}
//         onChange={handleChange}
//       />
//       <br></br>
//       <Form.Control
//         size="sm"
//         placeholder="Image"
//         name="image"
//         value={menu.image}
//         onChange={handleChange}
//       />
//       <br></br>
//       <Btn type="submit">Submit</Btn>
//     </Form>
//   );
// };

// export default MenuForm;
