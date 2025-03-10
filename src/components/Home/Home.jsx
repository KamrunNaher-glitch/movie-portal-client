import { useLoaderData } from 'react-router-dom'

import MovieCard from '../MovieCard/MovieCard';
import { useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    const loadedMovies = useLoaderData();
  const [movies,setMovies] = useState(loadedMovies);



    return (
        <div className='m-20'>
      <Banner></Banner>
     
      <h1 className=' font-bold text-7xl mb-8 text-center'>Featured Movies</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
       movies.map(movie =><MovieCard key={movie._id} movie ={movie} movies={movies} setMovies={setMovies}
       ></MovieCard>)
      }
     
      </div>
     
      
    </div>
    );
};

export default Home;