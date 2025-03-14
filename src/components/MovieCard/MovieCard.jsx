import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MovieCard = ({ movie, setMovies, movies }) => {
    const { _id, title, genre, duration, releaseYear, rating, summary, poster } = movie;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-2c8ktqa1o-kamrun-nahers-projects.vercel.app/movie/${_id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });

                            const remainingMovies = movies.filter((movie) => movie._id !== _id);
                            setMovies(remainingMovies);
                        }
                    })
                    .catch((error) => console.error("Error deleting movie:", error));
            }
        });
    };

    return (
        <div className="card bg-base-300 shadow-md rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
            {/* Movie Poster */}
            <figure className="w-full md:w-1/3">
                <img src={poster} alt={title} className="w-full h-auto rounded-md object-cover" />
            </figure>

            {/* Movie Details */}
            <div className="flex flex-col w-full md:w-2/3 space-y-2">
                <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
                <p className="text-sm md:text-base"><strong>Summary:</strong> {summary}</p>
                <p className="text-sm md:text-base"><strong>Genre:</strong> {genre}</p>
                <p className="text-sm md:text-base"><strong>Duration:</strong> {duration}</p>
                <p className="text-sm md:text-base"><strong>Release Year:</strong> {releaseYear}</p>
                <p className="text-sm md:text-base"><strong>Rating:</strong> {rating}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <Link to={`/movie/${_id}`} className="btn btn-primary w-full md:w-auto">View</Link>
                    <Link to={`/updateMovie/${_id}`} className="btn btn-warning w-full md:w-auto">Edit</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error w-full md:w-auto">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
