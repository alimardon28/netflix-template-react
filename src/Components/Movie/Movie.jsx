import React, { useEffect, useState } from "react";
import "../Movie/Movie.scss";
import axios from "../../Axios/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original";

const Movie = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trealerUrl, setTrealerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      console.log(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleTrealer = (movie) => {
    if (trealerUrl) {
      setTrealerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrealerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Erorr video"));
    }
  };

  const option = {
    height: "390",
    width: "100%",
    playerYoutube: {
      autoplay: 1,
    },
  };

  return (
    <div className="movie">
      {title}

      <div className="movie__hero">
        {movies?.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleTrealer(movie)}
              className={`movie__img ${isLargeRow && "movie__posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trealerUrl && (
        <YouTube
          className="youtubeVideos"
          videoId={trealerUrl}
          option={option}
        />
      )}
    </div>
  );
};

export default Movie;
