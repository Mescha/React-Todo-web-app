import React, {useContext, useEffect, useState} from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm'
import {TodoContext} from '../context'
import {calendarItems} from './constants'
import firebase from 'firebase/compat'
import moment from 'moment'
import randomColor from 'randomcolor'
import axios from 'axios'

 
function AddNewTodo() {
  
  const { projects, selectedProject } = useContext(TodoContext)

 const [showModal, setShowModal] = useState(false)
 const [text, setText] = useState('')
 const [day, setDay]= useState(new Date())
 const [time, setTime]= useState(new Date())
 const [todoProject, setTodoProject] = useState(selectedProject)
   
 const [noty, setNoty] = useState(new Date())
    
  // axios api request FCM serveru i notifikacija bez upotrebe firebase console    
 
  function  sendNotify() {
  const postData = function (url, payload) {
    return axios.post(url, payload, config);
};
let config = {
    headers: {
        'Content-Type': 'application/json',
        "Authorization" : "key= AAAAkb_oc1g:APA91bHy2dk9nY5NxAA-6cagGb_B3mDWGTZ3jq_h00vH0-hvx1q_foe5KRsKxcImAEUVPBgKApSgYuOahXbbEnUIPcGFjycSNwgzxvMsJLbo7pby9pkriLRQ2NQUB33DNIGJQBeEhE38"
    }
};
let body =  {
  "to": "dm2ty2pKsOEr2XJinsZb25:APA91bFgM5HA_GfjcF8DjMLqMTN9ry7thirK-L34y3fNz87CKp4Lw70ZNNIbRe2NcPSsoiZcWpeDoiHMEdGrZVaar_ufiacAseruatkFff01vZgjyTBaj32xpg934_LR9rmGw2V8xsqb",
  "notification": {
      "title": "Task reminder!!!",
      "body": "Notification",
      //"mutable_content": true,
      
  }
};
postData("https://fcm.googleapis.com/fcm/send",body).then((d)=>{
console.log("d",d)
}).catch((e)=>{
console.log("e",e);
});
 
};

 
// kraj dodatog koda   


// pokusaj racunanja milisekundi za notifikaciju 
   
/*
let customTime = noty.getTime() - Date.now();
   console.log(customTime);
  let timeout = setTimeout (
       function(){
         sendNotify();
       }, customTime
 );
*/
let customTime = noty.getTime() - Date.now();
   console.log(customTime);
  let timeout = setTimeout(() => {

    sendNotify();
  }, customTime)
       

      
      
  
 

// kraj pokusaja
  function handleSubmit(e){
          
      e.preventDefault()

      if(text && !calendarItems.includes(todoProject)){
             
           firebase
                   .firestore()
                   .collection('todos')
                  .add(
                        {
                            text: text,
                            date: moment(day).format('MM/DD/YYYY'),
                            day: moment(day).format('d'),
                            time: moment(time).format('hh:mm A'),
                            checked: false,
                            color: randomColor(),
                            projectName: todoProject

                        }

                  )

                  setShowModal(false)
                  setText('')
                  setDay(new Date())
                  setTime(new Date())

                  //setNoty(new Date())
      }


  }

  useEffect(() => {
     setTodoProject(selectedProject)
  }, [selectedProject])
  
  return (
    <div className='AddNewTodo'>
      <div className='btn'>
      <button onClick={() => setShowModal(true)}> + Add Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
      
          <TodoForm
           handleSubmit={handleSubmit}
           heading='Add new todo'
           text={text}
           setText={setText}
           day={day}
           setDay={setDay}
           time={time}
           setTime={setTime}
           todoProject={todoProject}
           setTodoProject={setTodoProject}
           projects={projects}
           showButtons={true}
           setShowModal={setShowModal}
           
           noty={noty}
           setNoty={setNoty}           
          />
      
      </Modal>
      
    </div>
  )
}

export default AddNewTodo


