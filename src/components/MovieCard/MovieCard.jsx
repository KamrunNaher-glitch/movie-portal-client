import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MovieCard = ({movie,setMovies,movies}) => {
    const{_id,title,genre,duration,releaseYear,rating,summary,poster} = movie;

    const handleDelete =_id => {
        console.log(_id);
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
            
        fetch(`http://localhost:5000/movie/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remaining = movies.filter(movie => movie._id !== _id);
              setMovies(remaining);

            }
        })
   }

  });


    }

    return (
        <div className="card card-side bg-base-300 shadow-sm">
  <figure>
    <img
      src={poster}
      alt="Movie" />
  </figure>
  <div className="flex w-full p-8 ">
            <div>
                <h2 className="card-title">Movie Title: {title}</h2>
                <p>Movie Summary:{summary}</p>
                <p>Genere:{genre}</p>
                <p>Duration:{duration}</p>
                <p>Release Year :{releaseYear}</p>
                <p>Rating:{rating}</p>
            </div>
    <div className="card-actions justify-end ">
    <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
           <Link to={`UpdateMovie/${_id}`}>

           <button className="btn join-item">Edit</button>
           </Link>
            <button onClick={() => handleDelete(_id)}
             className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default MovieCard ;





