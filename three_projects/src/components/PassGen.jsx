import React, { useCallback, useEffect, useState } from 'react'

const PassGen = () => {

  const [pass,setPass]=useState("");
  const [length,setLength]=useState("20");
  const [number,setNumber]=useState(false);
  const [character,setCharacter]=useState(false);
  const [copybtn,setCopyBtn]=useState("Copy");
  
  let genPass=useCallback(()=>{
       let pass="";
       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcedefghiklmnopqrstuvwxyz";

       if(number){
        str=str+"0123456789";
       }
       if(character){
         str=str+"{}[]`~,'/*-+?<>.:;-_=&^%$#@!"
       }

       for(let i=1;i<=length;i++){
        let char=Math.floor((Math.random()*str.length)+1);
        pass=pass+str.charAt(char);
       }
       

       setPass(pass);
       setCopyBtn("Copy");

  },[length,number,character]);

  useEffect(()=>{
        genPass();
  },[length,number,character]);

  let copyToClipBoard=(e)=>{
      window.navigator.clipboard.writeText(pass);
      setCopyBtn("Copied");
      
  }

  return (
    <div className="w-1/2 h-36 mx-auto mt-12  bg-gray-700 rounded-xl">
        <input type="text" className="w-10/12 m-4 p-2 border-none text-l " readOnly value={pass}/>
        <button onClick={copyToClipBoard}  className="bg-blue-500 p-2  w-24 -ml-5 text-white fixed mt-4">{copybtn}</button>

        <input type="range" min="10" max="100" className="ml-4" value={length}
         onChange={(e)=>setLength(e.target.value)}
        /> <span className="text-orange-500 mr-4">Length({length})</span>

        <input id="numcheckbox" type="checkbox"  onChange={()=>setNumber((prev)=>!prev)}  /> 
        <label htmlFor="numcheckbox"><span className="text-orange-500 mr-4" >Numbers</span></label>

         <input id="charcheckbox" type="checkbox"  onChange={()=>setCharacter((prev)=>!prev)}  />
         <label htmlFor="charcheckbox"><span className="text-orange-500 mr-4" >Characters</span></label>
        </div>
  )
}

export default PassGen