import React, { useState } from 'react'

function BgChanger() {

 let [color,setColor]=useState("olive");
  return (
    <div className="w-full h-screen " style={{backgroundColor:color}}>
         <div className=" fixed  flex justify-center bottom-12 w-full">
           <div className="bg-white p-2 rounded-full">

               <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"red"}}
                onClick={()=>setColor("red")}
               >Red</button>

               <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"green"}}
               onClick={()=>setColor("green")}
               >Green</button>

               <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"blue"}}
               onClick={()=>setColor("blue")}
               >Blue</button>

               <button className=" px-4 mx-1 rounded-full text-black" style={{backgroundColor:"yellow"}}
               onClick={()=>setColor("yellow")}
               >yellow</button>

               <button className=" px-4 mx-1 rounded-full text-black" style={{backgroundColor:"pink"}}
               onClick={()=>setColor("pink")}
               >Pink</button>

               <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"purple"}}
               onClick={()=>setColor("purple")}
               >purple</button>

               <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"orange"}}
               onClick={()=>setColor("orange")}
               >orange</button>

                <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"grey"}}
               onClick={()=>setColor("grey")}
               >grey</button>
                
              <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"hotpink"}}
                 onClick={()=>setColor("hotpink")}
               >hotpink</button>  

              <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"aqua"}}
                onClick={()=>setColor("aqua")}
               >Aqua</button>

                <button className=" px-4 mx-1 rounded-full text-black" style={{backgroundColor:"bisque"}}
               onClick={()=>setColor("bisque")}
               >Bisque</button>

                <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"blueviolet"}}
               onClick={()=>setColor("blueviolet")}
               >BlueViolet</button>

                <button className=" px-4 mx-1 rounded-full text-white" style={{backgroundColor:"brown"}}
               onClick={()=>setColor("brown")}
               >Brown</button>

                <button className=" px-4 mx-1 rounded-full text-black" style={{backgroundColor:"chartreuse"}}
               onClick={()=>setColor("chartreuse")}
               >Chartreuse</button>

                 <button className=" px-4 mx-1 rounded-full text-black" style={{backgroundColor:"greenyellow"}}
               onClick={()=>setColor("greenyellow")}
               >GreenYellow</button>



           </div>           
         </div>   
    </div>
  )
}

export default BgChanger