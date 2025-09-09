import React from 'react';


const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x400"}
                    alt={movie.Title}
                    style={{ width: "400px", height: "400px", objectFit: "cover" }}
                />


            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>

    );
}

export default MovieCard;