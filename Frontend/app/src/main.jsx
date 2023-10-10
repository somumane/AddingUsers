import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/Components/Home.jsx'
import Users from './Components/Users.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Adduser from './Components/Adduser.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='' element={<Home/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/adduser' element={<Adduser/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
