import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewTodo from './components/AddNewTodo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';
import React from 'react'
//import Notification from './components/Notification';
import Express from './components/Express';

function App() {
  return (
    
    <div className='app'>
      
      
      <Header>
       <User />
      </Header>
      
   
      <Sidebar>
        <AddNewTodo />
        <Calendar />
        <Projects />      
        
      </Sidebar>
      
      <Main>
       <Todos />
       <EditTodo />
       
      </Main>
     
     
     
    </div>
  );
}



export default App;
