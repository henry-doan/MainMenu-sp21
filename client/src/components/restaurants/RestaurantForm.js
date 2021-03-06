import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Btn } from "../shared/StyledComponents";
import axios from "axios";

const RestaurantForm = ({ restaurantProp, addRestaurant }) => {
  const [restaurant, setRestaurant] = useState(
    restaurantProp
      ? {
          name: restaurantProp.name,
          image: restaurantProp.image,
          description: restaurantProp.description,
          favorite: restaurantProp.favorite,
        }
      : { name: "", image: "", description: "", favorite: false }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaurant({ name: "", image: "", description: "" , favorite: false});
    if (restaurantProp) {
      handleUpdate();
    } else {
      axios
        .post(`/api/users/:user_id/restaurants`, {
          name: restaurant.name,
          description: restaurant.description,
          image: restaurant.image,
          favorite: restaurant.favorite
        })
        .then((res) => {
          // console.log(res)
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    axios
      .put(`/api/restaurants/${restaurantProp.id}`, {
        name: restaurant.name,
        description: restaurant.description,
        image: restaurant.image,
        favorite: restaurant.favorite,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            size="sm"
            placeholder="Name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Control
            size="sm"
            placeholder="Description"
            name="description"
            value={restaurant.description}
            onChange={handleChange}
          />
          <br></br>
          <Form.Control
            size="sm"
            placeholder="Image URL..."
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
