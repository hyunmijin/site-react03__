import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import MovieTag from "../movie/MovieTag";
import MovieSlider from "../movie/MovieSlider";
import MovieCont from "../movie/MovieCont";
import ContTitle from "../layout/ContTitle";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(`${query}?api_key=df0f22ba19b0aec55cc00b9684e9bc3f`)
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=df0f22ba19b0aec55cc00b9684e9bc3f"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="movie" />
      <MovieSlider movies={movies} />
      <MovieTag onSearch={search} />
      <MovieCont movies={movies} />
    </Contents>
  );
};

export default MoviePage;
