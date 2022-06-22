import React, { useEffect, useState } from "react";
import "../Movie/Movie.scss";
import axios from "../../Axios/axios";

const baseURL = "https://image.tmdb.org/t/p/original";

const Movie = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      console.log(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie">
      {title}

      <div className="movie__hero">
        {movie?.map((img) => {
          return (
            <img
              className={`movie__img ${isLargeRow && "movie__posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? img.poster_path : img.backdrop_path
              }`}
              alt={img.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
