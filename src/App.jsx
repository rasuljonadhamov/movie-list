import { useEffect, useState } from "react";
import "./App.css";
import MoviList from "./components/MovieList/MoviList";

function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const data = await fetch(
      "http://www.omdbapi.com/?s=star wars&apikey=b59f7f34"
    );
    const res = await data.json();

    setMovies(res.Search);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return <>{<MoviList moviess={movies} />}</>;
}

export default App;
