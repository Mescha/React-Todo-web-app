import React, { useContext } from 'react'
import {CalendarDate} from 'react-bootstrap-icons'
import {calendarItems} from './constants'
import {TodoContext} from '../context'

function Calendar(){
  
  const {setSelectedProject}= useContext(TodoContext)
  return (
    <div className='Calendar'>
         <div className='header'>
           <div className='title'>
             <CalendarDate size="18px" />
             <p>Calendar</p>
           </div>
            <div className='btns'>
              <span>
               
              </span>
            </div>
         </div>
       <div className='items'>
         {

           calendarItems.map(item =>
            <div className='item' 
            key={item}
            onClick={() => setSelectedProject(item)}
            >
              {item}
              </div>
              )
         }

       </div>
         
            </div>
  )
}


export default Calendar