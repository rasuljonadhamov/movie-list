function SearchBar({ onClick }) {
  return (
    <div>
      <input onChange={onClick} type="search" placeholder="Search Movies..." />
    </div>
  );
}

export default SearchBar;
