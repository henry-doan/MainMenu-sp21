import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Btn, IMG, LoginImgCont } from "../shared/StyledComponents";
import axios from "axios";

const RestaurantForm = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaurant({ name: "", image: "", desc: "" });
    axios
      .post(`/api/users/:user_id/restaurants`, {
        name: restaurant.name,
        description: restaurant.description,
        image: restaurant.image,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    //
    axios
      .put(`/api/users/:user_id/restaurants/`, {
        name: restaurant.name,
        description: restaurant.description,
        image: restaurant.image,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            size="lg"
            placeholder="Name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
          <Form.Control
            size="lg"
            placeholder="Description"
            name="description"
            value={restaurant.desc}
            onChange={handleChange}
          />
          <Form.Control
            size="lg"
            placeholder="Image"
            name="image"
            value={restaurant.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Btn type="submit">Submit</Btn>
      </Form>
    </Container>
  );
};

export default RestaurantForm;
