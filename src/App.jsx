import { useEffect, useState } from "react";
import "./App.css";
import MoviList from "./components/MovieList/MoviList";
import MovieHeading from "./components/MovieHeading/MovieHeading";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getMovies(searchValue) {
    const data = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=b59f7f34`
    );
    const res = await data.json();

    if (res.Search) {
      setMovies(res.Search);
    }
  }

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="movie-header">
        <MovieHeading heading="Movies" />
        <SearchBar
          onClick={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="movielist-wrapper">{<MoviList moviess={movies} />}</div>
    </>
  );
}

export default App;
