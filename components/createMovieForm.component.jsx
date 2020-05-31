import React, { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

const MovieCreateForm = () => {

  const [form, setForm] = useState({
    name: 'some movie...',
    description: 'some description'
  })

  const handleChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    setForm({
      ...form,
      [name] : value
    })
  }

  const handleSubmit = () => {

  }

  return (
    <Form onSubmit={handleSubmit}>
      {JSON.stringify(form)}
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input
          onChange={handleChange}
          value={form.name}
          type='text'
          class='form-control'
          id='name' 
          aria-describedby='emailHelp'
          placeholder='Lord of the Rings' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input
          onChange={handleChange}
          value={form.description}
          type='text'
          class='form-control'
          id='description'
          placeholder='Somewhere in Middle-earth...' />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Rating</Label>
        <Input
          onChange={handleChange}
          value={form.rating}
          type='number'
          max='5'
          min='0'
          class='form-control'
          id='rating'
          placeholder='3' />
        <small id='emailHelp' class='form-text text-muted'>Max: 5, Min: 0 </small>
      </FormGroup>
      <FormGroup>
        <Label for='image'>Image</Label>
        <Input
          onChange={handleChange}
          value={form.image}
          type='text'
          class='form-control'
          id='image'
          placeholder='http://.....' />
      </FormGroup>
      <FormGroup>
        <Label for='cover'>Cover</Label>
        <Input
          onChange={handleChange}
          value={form.cover}
          type='text'
          class='form-control'
          id='cover'
          placeholder='http://......' />
      </FormGroup>
      <FormGroup>
        <Label for='longDesc'>Long Description</Label>
        <Input
          onChange={handleChange}
          value={form.longDesc}
          type='textarea' 
          class='form-control'
          id='longDesc'
          rows='3'>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='genre'>Genre</Label>
        <select multiple class='form-control' id='genre'>
          <option>sci-fi</option>
          <option>fantasy</option>
          <option>adventure</option>
          <option>comedies</option>
          <option>cartoons</option>
          <option>drama</option>
          <option>action</option>
        </select>
      </FormGroup>
    </Form>
  )
}

export default MovieCreateForm