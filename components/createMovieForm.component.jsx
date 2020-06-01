import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateMovieForm = ({ handleCreateMovie }) => {
  console.log(handleCreateMovie);
  

  const [form, setForm] = useState({
    name: 'some movie...',
    description: 'some description...'
  })

  const handleChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name] : value
    })
  }

  const handleGenreChange = e => {
  
    const { options, name, value } = e.target
    let selectValue = []
    
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        selectValue.push(options[i].value)
        }
      }

    setForm({
      ...form,
      [name]: value.toString()
    })
  }

  const handleSubmit = () => {
    debugger
    handleCreateMovie({...form})
  }
  

  return (
    <Form >
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input
          onChange={handleChange}
          value={form.name}
          type='text'
          className='form-control'
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
          className='form-control'
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
          className='form-control'
          id='rating'
          placeholder='3' />
        <small id='emailHelp' className='form-text text-muted'>Max: 5, Min: 0 </small>
      </FormGroup>
      <FormGroup>
        <Label for='image'>Image</Label>
        <Input
          onChange={handleChange}
          value={form.image}
          type='text'
          className='form-control'
          id='image'
          placeholder='http://.....' />
      </FormGroup>
      <FormGroup>
        <Label for='cover'>Cover</Label>
        <Input
          onChange={handleChange}
          value={form.cover}
          type='text'
          className='form-control'
          id='cover'
          placeholder='http://......' />
      </FormGroup>
      <FormGroup>
        <Label for='longDesc'>Long Description</Label>
        <Input
          onChange={handleChange}
          value={form.longDesc}
          type='textarea' 
          className='form-control'
          id='longDesc'
          rows='3'>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='genre'>Genre</Label>
        <select 
          onChange={handleGenreChange} 
          multiple className='form-control' 
          id='genre'
        >
          <option>sci-fi</option>
          <option>fantasy</option>
          <option>adventure</option>
          <option>comedies</option>
          <option>cartoons</option>
          <option>drama</option>
          <option>action</option>
        </select>
      </FormGroup>
      <Button color='primary' onClick={handleSubmit}>Create</Button>{' '}
    </Form>
  )
}

export default CreateMovieForm