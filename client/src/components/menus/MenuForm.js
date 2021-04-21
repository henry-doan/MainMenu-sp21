import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'



const MenuForm = () => {
  const [menu, setMenu] = useState({ name: "", image: "", description: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setMenu({ name: '', image: '', desc: '' })
    axios
    
      .post(`/api/restaurants/:restaurant_id/menus`, {
        name: menu.name,
        description: menu.description,
        image: menu.image,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err))
  }

    const handleChange = (e) => {
      setMenu({
        ...menu,
        [e.target.name]: e.target.value,
      })
    }

    const handleUpdate = (e) => {
      //
      axios
        .put(`/api/restaurants/:restaurant_id/menus`, {
        name: menu.name,
        description: menu.description,
        image: menu.image,
        })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => console.log(err))
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        size='lg'
        placeholder='Name'
        name='name'
        value={menu.name}
        onChange={handleChange}
      />
      <Form.Control
        size='lg'
        placeholder='Description'
        name='description'
        value={menu.desc}
        onChange={handleChange}
      />
      <Form.Control
        size='lg'
        placeholder='Image'
        name='image'
        value={menu.image}
        onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default MenuForm;