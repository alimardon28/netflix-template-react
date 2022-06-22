const APIKEY = "143bebe5e619280a37d188e20fe3a5ad";

const requests = {
    fetchTrending:`/trending/all/week?api__key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMoves:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;