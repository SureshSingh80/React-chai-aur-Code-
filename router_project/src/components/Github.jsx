import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
   const data=useLoaderData();
   
  // const [data,setData]=useState({});
  //  useEffect(()=>{
  //       fetch('https://api.github.com/users/hiteshchoudhary')
  //      .then((res)=>res.json())
  //      .then((data)=>{
  //       console.log(data)
  //         setData(data);
  //       },[])
  //  },[])

  return (
    <div style={{height:"30rem"}}>
        <div className='p-4 bg-gray-500 text-white text-center w-full text-xl'>Followers: {data.followers}</div>
        <img src={data.avatar_url} width="350px" className='mt-4 ml-[40%] rounded-lg'></img>
    </div>
  )
}


export  const  getGitInfo=async ()=>{
  let response=await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}
export default Github