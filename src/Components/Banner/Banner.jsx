import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Request/Request";
import "../Banner/Banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const responseData = await axios.get(requests.fetchNetflixOriginals);
      console.log(responseData);
    };

    fetchMovie();
  });

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button btn bg-dark text-light">
              Play
            </button>
            <button className="banner__button btn bg-danger text-light">
              My List
            </button>
          </div>
          <p className="banner__desc">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
