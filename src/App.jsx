import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  
  const loadedMovies = useLoaderData();
  const [movies,setMovies] = useState(loadedMovies);

  return (
    <div className='m-20'>
      
      <h1 className='text-5xl text-purple-600 my-20'>Vite + React</h1>

      <div className='grid md:grid-cols-2 gap-4'>
      {
        movies.map(movie =><MovieCard key={movie._id} movie={movie} 
          movies = {movies}
          setMovies = {setMovies}
        ></MovieCard>)
      }
     
      </div>
     
      
    </div>
  )
}

export default App
