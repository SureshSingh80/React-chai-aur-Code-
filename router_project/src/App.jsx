import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Github from "./components/Github"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Footer from "./components/Footer"
import User from "./components/User"
import SocialLinks from "./components/SocialLinks"

function App() {

  
  return (
    <>
    {/* Browser router does not support API calls, so have use createBrowserRouter */}
          {/* <BrowserRouter>
            <Navbar></Navbar>
             <hr />
          
             <div className="">
            <Routes>
              <Route path="/" element={<Home ></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/github" element={<Github></Github>}></Route>
              <Route path="/user/:username" element={<User></User>}></Route>
            </Routes>
            </div>
            <hr />
            <Footer></Footer>
            <hr />
            <SocialLinks></SocialLinks>
           
       </BrowserRouter> */}
    </>
  )
}

export default App
