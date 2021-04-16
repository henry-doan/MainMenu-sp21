import { usestate } from 'react';
import { Form, Button } from 'react-bootstrap';


const RestaurantForm = ({addRestaurant}) => {
  const [restaurant, setRestaurant] = usestate({ name:"", image:"", desc:""})

  const handleSubmit = (e) => {
    e.preventDefault()
    addRestaurant(restaurant)
    setRestaurant({ name:"", image:"", desc:""})
  }

  return(

    <Form onSubmit={handleSubmit}>
    <Form.Control
      label='Name'
      name='name'
      value={restaurant.name}
      onChange={(e, {value}) => setRestaurant({...restaurant, name: value})}
    />
    <Form.Control
      label='Desc'
      name='desc'
      value={restaurant.desc}
      onChange={(e, {value}) => setRestaurant({...restaurant, desc: value})}
    />
    <Form.Control
      label='Image'
      name='image'
      value={restaurant.image}
      onChange={(e, {value}) => setRestaurant({...restaurant, image: value})}
    />
    <Button>Update</Button>
  </Form>
)
}


export default RestaurantForm;