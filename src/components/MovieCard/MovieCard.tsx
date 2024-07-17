import { MovieProps } from "./interface";

export function MovieCard(props: MovieProps) {
  const { id, poster_path, title, release_date, vote_average, overview } =
    props;

  return (
    <div className="card" key={id}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={`${title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p>
          <small>RELEASE DATE: {release_date}</small>
        </p>
        <p>
          <small>RATING: {vote_average}</small>
        </p>
        <p className="card--description">{overview}</p>
      </div>
    </div>
  );
}
