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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('http://localhost:5000/movie')
  },
  {
    path: "addMovie",
    element: <AddMovie></AddMovie>
  },
  {
    path:'updateMovie/:id',
    element: <UpdateMovie></UpdateMovie>,
    loader:({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
