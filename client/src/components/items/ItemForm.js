import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'



const ItemForm = () => {
  const [item, setItem] = useState({ name: "", image: "", description: "", price: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setItem({ name: '', image: '', desc: '', price: '' })
    axios
      .post(`/api/items/${item.id}`, {
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err))
  }

    const handleChange = (e) => {
      setItem({
        ...item,
        [e.target.name]: e.target.value,
      })
    }

    const handleUpdate = (e) => {
      //
      axios
        .put(`/api/menus/${this.id}/items`, {
        name: item.name,
        description: item.description,
        image: item.image,
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
        value={item.name}
        onChange={handleChange}
      />
      <Form.Control
        size='lg'
        placeholder='Description'
        name='description'
        value={item.desc}
        onChange={handleChange}
      />
      <Form.Control
        size='sm'
        placeholder='Item'
        name='item'
        value={item.image}
        onChange={handleChange}
      />
      <Form.Control
        size='sm'
        placeholder='Price'
        name='price'
        value={item.price}
        onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default ItemForm;