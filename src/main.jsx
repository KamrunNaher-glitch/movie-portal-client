import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import UpdateMovie from './components/UpdateMovie/UpdateMovie.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Users from './components/Users/Users.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'; 


import FeaturedMovies from './components/FeaturedMovie/FeaturedMovies.jsx';
import { FavoriteMovies } from './components/FavoriteMovies/FavoriteMovies.jsx';
import AuthProvider from './providers/AuthProvoder.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch('http://localhost:5000/movie');
          return res.json();  // ✅ Fix: Ensure it returns JSON
        },
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/movie/${params.id}`);
          return res.json();  // ✅ Fix: Ensure it returns JSON
        },
      },
      {
        path: "AddMovie",
        element: <AddMovie />,
      },
      {
        path: 'updateMovie/:id',
        element: <UpdateMovie />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/movie/${params.id}`); // ✅ Fix: Used backticks
          return res.json();  // ✅ Fix: Ensure it returns JSON
        },
      },
      {
        path: 'signIn',
        element: <SignIn />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'AboutUs',
        element: <AboutUs />,
      },
      {
        path: 'Users',
        element: <Users />,
        loader: async () => {
          const res = await fetch('http://localhost:5000/users');
          return res.json();  // ✅ Fix: Ensure it returns JSON
        },
      },
      {
        path: 'FeaturedMovies',
        element: <FeaturedMovies />,
      },
      {
        path: 'FavoriteMovies',
        element: <FavoriteMovies />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails></MovieDetails>,
       loader:({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
);
