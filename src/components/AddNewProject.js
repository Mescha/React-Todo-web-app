import React, {useState} from 'react'
import {Plus} from 'react-bootstrap-icons'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import firebase from 'firebase/compat'


function AddNewProject() {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  
  
  function handleSubmit(e){
     
       e.preventDefault()
       if(projectName){
                 
           const projectsRef=firebase.firestore().collection('projects')

           projectsRef
                  .where('name', '==', projectName)
                  .get()
                  .then(querySnapshot => {
                     
                     if(querySnapshot.empty){
                       projectsRef
                                .add(
                                     {
                                        
                                         name: projectName
                                     }
                                )
                     }else{
                       alert('Project already exists!')
                     }
                  })
                  setShowModal(false)
                  setProjectName('')
       }
  
  }

  return (
    <div className='AddNewProject'>
      <div className='add-button'>
        <span onClick={() => setShowModal(true)}>
          <Plus size="20px" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
 
          <ProjectForm 
           handleSubmit={handleSubmit}
           heading='New project!'
           value={projectName}
           setValue={setProjectName}
           setShowModal={setShowModal}
           confirmButtonText='+ Add project'
          />
      </Modal>
      
      </div>
  )
}

export default  AddNewProject