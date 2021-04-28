
import { Form } from "react-bootstrap";
import { Btn } from "../shared/StyledComponents";
import { Component } from "react";

class ItemForm extends Component {
  state = { name: "", description: "", price: "", image: "" };

  componentDidMount() {
    if (this.props.id) {
      const { id, name, description, price, image } = this.props;
      this.setState({ id, name, description, price, image });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateItem, id, toggleForm } = this.props;
      updateItem(id, this.state);
      toggleForm();
    } else {
      this.props.addItem(this.state);
    }
    this.setState({ name: "", description: "", price: "", image: "" });
  };
  render() {
    const { name, description, price, image } = this.state;
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
          type="text"
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
          name="price"
          value={price}
          onChange={this.handleChange}
          required
          placeholder="Price"
        />
        <br></br>
        <Form.Control
          size="sm"
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
          required
          placeholder="Image URL"
        />
        <br></br>
        <Btn type="submit">Submit</Btn>
      </Form>
    );
  }
}
export default ItemForm;

// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";

// const ItemForm = () => {
//   const [item, setItem] = useState({
//     name: "",
//     image: "",
//     description: "",
//     price: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setItem({ name: "", image: "", desc: "", price: "" });
//     axios
//       .post(`/api/items/${item.id}`, {
//         name: item.name,
//         description: item.description,
//         image: item.image,
//         price: item.price,
//       })
//       .then((res) => {
//         // console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleChange = (e) => {
//     setItem({
//       ...item,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = (e) => {
//     //
//     axios
//       .put(`/api/menus/${this.id}/items`, {
//         name: item.name,
//         description: item.description,
//         image: item.image,
//       })
//       .then((res) => {
//         // console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Control
//         size="lg"
//         placeholder="Name"
//         name="name"
//         value={item.name}
//         onChange={handleChange}
//       />
//       <Form.Control
//         size="lg"
//         placeholder="Description"
//         name="description"
//         value={item.desc}
//         onChange={handleChange}
//       />
//       <Form.Control
//         size="sm"
//         placeholder="Item"
//         name="item"
//         value={item.image}
//         onChange={handleChange}
//       />
//       <Form.Control
//         size="sm"
//         placeholder="Price"
//         name="price"
//         value={item.price}
//         onChange={handleChange}
//       />
//       <Button type="submit">Submit</Button>
//     </Form>
//   );
// };

// export default ItemForm;
