import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-portal-server-2c8ktqa1o-kamrun-nahers-projects.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        const sortedMovies = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setMovies(sortedMovies);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="card bg-base-200 shadow-lg p-4">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Duration: {movie.duration} mins</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movies/${movie._id}`} className="btn btn-primary mt-2">See Details</Link>
          </div>
        ))}
      </div>
      <Link to="/movies" className="btn btn-secondary mt-6">See All Movies</Link>
    </div>
  );
};

export default FeaturedMovies;