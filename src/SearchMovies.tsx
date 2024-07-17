export function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        placeholder="i.e. Dracula"
        className="input"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
