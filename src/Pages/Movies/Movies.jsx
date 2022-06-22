import React from "react";
import netflixicon from "../../assets/images/logo.png";
import Banner from "../../Components/Banner/Banner";
import Movie from "../../Components/Movie/Movie";
import requests from "../../Request/Request";
import "../Movies/Movies.scss";

const Movies = () => {
  return (
    <div className="movies">
      <div className="container movies__container">
        <div className="movies__nav">
          <img className="movies__img" src={netflixicon} alt="" />
          <button className="movies__button">Logout</button>
        </div>
      </div>

      <div className="movies__main">
        <Banner />
        <Movie
          isLargeRow={true}
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Movie title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Movie title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Movie title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Movie title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
        <Movie title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
        <Movie title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
};

export default Movies;
