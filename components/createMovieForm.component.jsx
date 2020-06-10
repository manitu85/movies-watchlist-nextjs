import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateMovieForm = ({ handleFormSubmit, initialData, submitButtonText }) => {

  const defaultData = { 
    name: '',
    releaseYear: '',
    description: '',
    longDesc: '',
    rating: '',
    genre: '',
    image: '',
    // cover: '',
    // trailer: '',
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

    const { options } = e.target
    let selectedValue = []
    
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        selectedValue.push(options[i].value)
        }
      }

    setForm({...form, genre: selectedValue.toString() })
  }


  const handleSubmit = () => handleFormSubmit({...form})
  
  

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
          placeholder='movie name' />
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
          placeholder='movie description...' />
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
          placeholder='released year' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='description'>Rating</Label>
        <Input
          onChange={handleChange}
          value={form.rating}
          name='rating'
          type='number'
          max='10'
          min='0'
          className='form-control'
          id='rating'
          placeholder='rating' />
        <small className='form-text text-muted'>Min: 0, Max: 10</small>
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
        <Input 
          multiple
          onChange={handleGenreChange} 
          name='genre'
          type='select'
          id='genre'
          className='form-control'  
        >
          <option>comedy</option>
          <option>sci-fi</option>
          <option>horror</option>
          <option>romance</option>
          <option>fantasy</option>
          <option>adventure</option>
          <option>superhero</option>
          <option>animation</option>
          <option>drama</option>
          <option>mystery</option>
          <option>action</option>
          <option>crime</option>
          <option>historical</option>
          <option>documentary</option>
        </Input>
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

// TO-D0 repair multiply choice

export default CreateMovieForm