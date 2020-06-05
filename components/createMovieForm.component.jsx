import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateMovieForm = ({ handleCreateMovie, initialData, submitButtonText }) => {

  const defaultData = { 
    name: '',
    description: '',
    releaseYear: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  }
  
  const formData = initialData ? {...initialData} : defaultData

  const [form, setForm] = useState(formData)
  const [initialDataLoaded, setInitialDataLoaded] = useState(false)

  // useEffect(() => {
  //     if (initialData) {
  //       setForm(initialData)
  //       setInitialDataLoaded(true)
  //     }
  //   }, [initialDataLoaded])

  const handleChange = e => {
    const { name, value } = e.target
    setForm({...form, [name] : value })
  }

  const handleGenreChange = e => {

    const { options, name, value } = e.target
    let selectedValue = []
    
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        selectedValue.push(options[i].value)
        }
      }

    setForm({...form, [name]: value.toString() })
  }

  const handleSubmit = () => handleCreateMovie({...form})
  
  

  return (
    <Form >
      <FormGroup>
        <Label htmlFor='name'>Name</Label>
        <Input
          onChange={handleChange}
          value={form.name}
          name='name'
          type='text'
          className='form-control'
          id='name' 
          aria-describedby='emailHelp'
          placeholder='Lord of the Rings' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='description'>Description</Label>
        <Input
          onChange={handleChange}
          value={form.description}
          name='description'
          type='text'
          className='form-control'
          id='description'
          placeholder='Somewhere in Middle-earth...' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='releaseYear'>Year of release</Label>
        <Input
          onChange={handleChange}
          value={form.releaseYear}
          name='releaseYear'
          type='text'
          className='form-control'
          id='releaseYear'
          placeholder='release year' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='description'>Rating</Label>
        <Input
          onChange={handleChange}
          value={form.rating}
          name='rating'
          type='number'
          max='5'
          min='0'
          className='form-control'
          id='rating'
          placeholder='3' />
        <small id='emailHelp' className='form-text text-muted'>Max: 5, Min: 0 </small>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='image'>Image</Label>
        <Input
          onChange={handleChange}
          value={form.image}
          name='image'
          type='text'
          className='form-control'
          id='image'
          placeholder='http://.....' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='cover'>Cover</Label>
        <Input
          onChange={handleChange}
          value={form.cover}
          name='cover'
          type='text'
          className='form-control'
          id='cover'
          placeholder='http://......' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='longDesc'>Long Description</Label>
        <Input
          onChange={handleChange}
          value={form.longDesc}
          name='longDesc'
          type='text' 
          className='form-control'
          id='longDesc'
          rows='3'>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='genre'>Genre</Label>
        <select 
          onChange={handleGenreChange} 
          className='form-control' 
          multiple 
          name='genre'
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
      {/* <Button color='primary' type='button' onClick={handleSubmit}>Create</Button>{' '} */}
      <Button
        color='primary'
        onClick={handleSubmit}>
        {submitButtonText || 'Create'}
      </Button>
    </Form>
  )
}

export default CreateMovieForm