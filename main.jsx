import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact_us/Contact.jsx'
import Github,{githubInfoLoader} from './components/Git/Github.jsx'

// important part
// What is the use of router in react?

// ReactJS Router is mainly used for developing Single Page Web Applications. 
// React Router is used to define multiple routes in the application.
// When a user types a specific URL into the browser, and if this URL path matches any 'route'
//  inside the router file, the user will be redirected to that particular route.

// first way to make router
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children: [
//       {
//          path:"",
//          element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// second way to make router
const router = createBrowserRouter(
  createRoutesFromElements(
    // main path of App inside Route element
    <Route path='' element = {<App/>} >  
    <Route path='' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route
    loader={githubInfoLoader}
    path='/github' element={<Github/>} />
    </Route>
  )
) 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
