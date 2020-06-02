import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const CreateMovieModal = ({ className, hasSubmit, children }) => {

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const submitModal = () => {
    setModal(!modal)
    alert('submitting modal')
  }

  const closeBtn = <button className='close' onClick={toggle}>&times;</button>

  return (
    <div>
      <Button 
        block
        color='primary' 
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
          { children }
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