import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const movie = useLoaderData();
    const { title, genre, duration, releaseYear, rating, summary, poster } = movie;

    return (
        <div className="container mx-auto p-6">
            <div className="card lg:card-side bg-base-300 shadow-lg">
                <figure>
                    <img src={poster} alt={title} className="w-full md:w-96" />
                </figure>
                <div className="p-8">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="mt-4"><strong>Genre:</strong> {genre}</p>
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Release Year:</strong> {releaseYear}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                    <p className="mt-4">{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
