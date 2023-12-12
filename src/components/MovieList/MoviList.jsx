function MoviList(props) {
  return (
    <div>
      {props.moviess.map((movie) => (
        <>
          <img src={movie.Poster} alt={movie.title}  />
        </>
      ))}
    </div>
  );
}

export default MoviList;
