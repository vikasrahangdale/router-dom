import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Mail from './Components/Mail';


const router = createBrowserRouter (
 
  [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element:  <Contact/>
    },
    {
      path: "/mail",
      element: <Mail/>,
    },
  ]
)
 


const App = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
