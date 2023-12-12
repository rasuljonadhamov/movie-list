function MoviList(props) {
  return (
    <div className="movies-wrapper">
      {props.moviess.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={movie.title} />
          <h2>{movie.Title}</h2>
        </div>
      ))}
    </div>
  );
}

export default MoviList;
