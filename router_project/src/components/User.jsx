import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {

    const {username}=useParams();
  return (
    <div style={{height:"30rem"}}>
        <div className='bg-gray-500 text-white text-center p-4 text-xl'>
           Welcome : {username}
        </div>
    </div>
  )
}

export default User