import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

   
  return (
  
    <div className="flex justify-around p-4" style={{fontFamily:"arial"}}>
        <div className="text-2xl ">your <span className="text-red-700 "><b>logo</b></span></div>

        <div className="">
            <NavLink className={({isActive}) =>` ${isActive ? "text-orange-700" : "hover:text-orange-700"} mx-3  `}  to={"/"}><b>Home</b></NavLink>
            <NavLink className={({isActive}) =>` ${isActive ? "text-orange-700" : "hover:text-orange-700"} mx-3  `} to={"/about"}><b>About</b></NavLink>
            <NavLink className={({isActive}) =>` ${isActive ? "text-orange-700" : "hover:text-orange-700"} mx-3  `} to={"/contact"}><b>Contact</b></NavLink>
            <NavLink className={({isActive}) =>` ${isActive ? "text-orange-700" : "hover:text-orange-700"} mx-3  `} to={"/github"}><b>Github</b></NavLink>
        </div>

        <div className="">
            <button className="mx-3">Log in</button>
            <button className="mx-3 bg-red-700 py-2 px-4 text-white rounded-xl">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar