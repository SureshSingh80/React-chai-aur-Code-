import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github, { getGitInfo } from './components/Github.jsx'
import User from './components/User.jsx'

const router=createBrowserRouter(
          createRoutesFromElements(
          <Route  path="/" element={<Layout></Layout>}>
              <Route path="" element={<Home></Home>}/>
              <Route path="about" element={<About></About>}/>
              <Route path="contact" element={<Contact></Contact>}/>
              <Route path="github" element={<Github></Github> } loader={getGitInfo} ></Route>
              <Route path="user/:username" element={<User></User>}/>

         </Route>
     )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
