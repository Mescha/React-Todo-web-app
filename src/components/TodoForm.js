import React from 'react'
import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

//dodao sam samo time picker u reminder dio 
// dodao meho i set meho da probam jednu stvar jer immam samo jednu varijablu za vrijeme i to me zeza trenutno 

function TodoForm({
    
     handleSubmit,
     heading = false,
     text, setText,
     day, setDay,
     time, setTime,
     todoProject, setTodoProject,
     projects,
     showButtons = false,
     setShowModal = false,
     meho, setMeho

}) {
   
    
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <form onSubmit={handleSubmit} className='TodoForm'>
          <div className='text'>
            {
                 heading && 
                   <h3>{heading}</h3>

            }
            <input 
             type='text'
             value={text}
             onChange={e => setText(e.target.value)}
             placeholder='todo ...'
             autoFocus

            />
           </div> 
           {/* ovo je dio vezan za notifikacije vidjecemo kako ubaciti*/}
           <div className='remind'>
             <Bell/>
             <p>Remind me </p>
             <TimePicker 
               value={meho}
               onChange={meho => setMeho(meho)}
               
             />
           </div> 
    
           
           
           <div className='pick-day'>
             <div className='title'>
               <CalendarDay />
               <p>Choose a day</p>
               
             </div>
             <DatePicker
             value={day}
             onChange={day => setDay(day)}
             />
           </div>
           <div className='pick-time'>
             <div className='title'>
               <Clock />
               <p>Choose time</p>
               
             </div>
             <TimePicker 
              value={time}
              onChange={time => setTime(time)}
             />
           </div>
          <div className='pick-project'>
            <div className='title'>
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className='projects'>
              
                   {
                    projects.length > 0 ?
                    projects.map( project => 
                        <div
                            className={`project ${todoProject === project.name ? "active" : ""}`}
                            onClick={() => setTodoProject(project.name)}
                            key={project.id}
                        >
                            {project.name}
                        </div>    
                    )
                    :
                    <div style={{color:'#ff0000'}}>
                        Please add a project before proceeding
                    </div>
                }

              
            </div>
          </div>
         
        {

            showButtons &&
            <div>
                 
                 <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div> 


            </div>
        }
         </form>   
        </MuiPickersUtilsProvider>
  
  )
}

export default TodoForm


