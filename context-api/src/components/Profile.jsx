import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext);

  if(!user) return <div>Please Login</div>

  return(
    <div>
        <p>Welcome: {user.username} </p>
        <p>Password: {user.password} </p>
    </div>
  )
}

export default Profile