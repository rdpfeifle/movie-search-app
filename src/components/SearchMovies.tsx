import { useState } from "react";
import { MovieProps } from "./MovieCard/interface";
import { MovieCard } from "./MovieCard/MovieCard";

export function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      setMovies(data.results);
    } catch (err) {
      console.log("Something went wrong. Error: ", err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="i.e. Dracula"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(({ poster_path }) => poster_path)
          .map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
