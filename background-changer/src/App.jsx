import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import  {ThemeProvider}  from "./context/Theme";

function App() {
 
    const [themeMode,setThemeMode]=useState("light");

    const darkMode=()=>{
      setThemeMode("dark");
    }

    const lightMode=()=>{
       setThemeMode("light");
    }
 
    
    
  

  useEffect(()=>{
     document.querySelector("html").classList.remove("dark","light");
     document.querySelector("html").classList.add(themeMode);
     
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
         <Navbar></Navbar>
         <hr />
         <Body></Body>
    </ThemeProvider>
  )
}

export default App
