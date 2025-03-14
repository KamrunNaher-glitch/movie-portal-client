import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Banner from '../Banner/Banner';
import Online from '../Online/Online';

const Home = () => {
    const loadedMovies = useLoaderData() || [];
    const [movies, setMovies] = useState(loadedMovies);

    return (
        <div className='px-4 md:px-10 lg:px-20'>
            <Banner />

            <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl text-center mt-10 mb-8'>
                Featured Movies
            </h1>

            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {movies?.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} movies={movies} setMovies={setMovies} />
                    ))
                ) : (
                    <p className="text-center text-xl text-gray-500">No movies available</p>
                )}
            </div>

            <Online />
        </div>
    );
};

export default Home;
