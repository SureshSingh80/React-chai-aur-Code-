import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex justify-around">
        <div className='p- text-3xl mt-8'  >your <span className="text-red-700 "><b>logo</b></span></div>
        <div className='flex  p-2'>
            <div>
                <b ><NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/resources">RESOURCES</NavLink></b><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/">Home</NavLink><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/about">About</NavLink><br />
            </div>
            <div className='mx-8'>
                <b ><NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/followus">FOLLOW US</NavLink></b><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/github">Github</NavLink><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/discord">Discord</NavLink>
            </div>
            <div className='mx-8'>
                <b><NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/legal">LEGAL</NavLink></b><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/privacy">Privacy Policy</NavLink><br />
                <NavLink className={({isActive})=>`${isActive ? "text-orange-700" : "hover:text-orange-700"}`}  to="/tnc">Terms & Condition</NavLink><br />
            </div>
        </div>
    </div>
  )
}

export default Footer