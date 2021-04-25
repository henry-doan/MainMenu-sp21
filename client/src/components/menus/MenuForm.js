import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Btn } from "../shared/StyledComponents";
import restaurantProp from "../restaurants/RestaurantForm";
// import { RestaurantContext } from "../../providers/RestaurantProvider";

const MenuForm = (props, restId) => {
  const [menu, setMenu] = useState({ name: "", image: "", description: "" });
  // const { restaurant } = useContext(RestaurantContext);
  
  console.log("props from menuform", props)
  // const {id} = props 
  const handleSubmit = (e) => {
    e.preventDefault();
    setMenu({ name: "", image: "", desc: "" });
    axios

      .post(`/api/restaurants/${restId}/menus`, {
        name: menu.name,
        description: menu.description,
        image: menu.image,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    //
    axios
      .put(`/api/restaurants/${restId}/menus`, {
        name: menu.name,
        description: menu.description,
        image: menu.image,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        size="sm"
        placeholder="Name"
        name="name"
        value={menu.name}
        onChange={handleChange}
      />
      <br></br>
      <Form.Control
        size="sm"
        placeholder="Description"
        name="description"
        value={menu.desc}
        onChange={handleChange}
      />
      <br></br>
      <Form.Control
        size="sm"
        placeholder="Image"
        name="image"
        value={menu.image}
        onChange={handleChange}
      />
      <br></br>
      <Btn type="submit">Submit</Btn>
    </Form>
  );
};

export default MenuForm;
