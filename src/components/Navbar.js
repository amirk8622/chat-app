import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <span className="logo">Hello Chat</span>
     <div className="user">
        <img src={currentUser.photoURL}alt='img'/>
        <span>{currentUser.displayName}</span>
        <button className='btn'onClick={()=>signOut(auth)}>logout</button>
     </div>
    </div>
  )
}

export default Navbar
