const FavoriteMovies = ({ favorites, setFavorites }) => {
    const handleRemoveFavorite = (id) => {
      const updatedFavorites = favorites.filter(movie => movie._id !== id);
      setFavorites(updatedFavorites);
    };
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">My Favorite Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <div key={movie._id} className="card bg-base-200 shadow-lg p-4">
              <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Duration: {movie.duration} mins</p>
              <p>Release Year: {movie.releaseYear}</p>
              <p>Rating: {movie.rating}</p>
              <button onClick={() => handleRemoveFavorite(movie._id)} className="btn btn-error mt-2">Delete Favorite</button>
            </div>
          ))}
        </div>
        <Link to="/movies" className="btn btn-secondary mt-6">See All Movies</Link>
      </div>
    );
  };
  
  export { FavoriteMovies };