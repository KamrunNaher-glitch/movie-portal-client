import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddMovie from './components/AddMovie/AddMovie.jsx';
import UpdateMovie from './components/UpdateMovie/UpdateMovie.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvoder from './providers/AuthProvoder.jsx';
import Users from './components/Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [

      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/movie')
      },
      {
        path: "AddMovie",
        element: <AddMovie></AddMovie>
      },

      {
        path:'updateMovie/:id',
        element: <UpdateMovie></UpdateMovie>,
        loader:({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
      },
      {
        path: 'signIn',
        element:<SignIn></SignIn>
      },
      {
        path: 'SignUp',
        element:<SignUp></SignUp>
      },
      {
        path: 'Users',
        element:<Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      },



    ]
  },
  



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvoder>
    <RouterProvider router={router} />
    </AuthProvoder>
  </StrictMode>,
)
