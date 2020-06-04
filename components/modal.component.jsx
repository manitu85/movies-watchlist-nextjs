import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import CreateMovieForm from './createMovieForm.component'
import { createMovie } from '../actions'


const CreateMovieModal = ({ className, hasSubmit, children }) => {

  const [modal, setModal] = useState(false)

  const router = useRouter()

  const toggle = () => setModal(!modal)

  const submitModal = () => setModal(!modal)
  
  const closeBtn = <button className='close' onClick={toggle}>&times;</button>

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies))
    })
    setModal(!modal)
    router.push('/')
  }

  return (
    <div>
      <Button 
        block
        outline
        color='success' 
        onClick={toggle}>Create Movie
      </Button>
      <Modal 
        isOpen={modal} 
        toggle={toggle} 
        className={className}>
        <ModalHeader 
          toggle={toggle} 
          close={closeBtn}>Create movie
        </ModalHeader>
        <ModalBody>
          <CreateMovieForm handleCreateMovie={handleCreateMovie} />
        </ModalBody>
        <ModalFooter>
          { 
            hasSubmit && <Button color='primary' onClick={submitModal}>Save changes</Button>
          }
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CreateMovieModal