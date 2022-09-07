import React from 'react'
import User from './User'

function Header(props) {
  return (
    <div className='Header'>
         {props.children}
         
    </div>
  )
}

export default Header