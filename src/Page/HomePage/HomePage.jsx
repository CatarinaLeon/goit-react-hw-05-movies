import React from "react";
import { useState, useEffect } from "react";
import { fetchTrending } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && <MoviesList moviesList={movies} />}
    </>
  );
};

export default HomePage;
