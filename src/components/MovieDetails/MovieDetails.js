import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSingleMovie } from 'components/api/fetchapi';
import css from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ castData, rewievData }) => {
  const { movieId } = useParams();
  const [singleMovie, setSingleMovie] = useState();
  const location = useLocation();

  const fetchMovieDetails = async id => {
    setSingleMovie('');
    const movie = await fetchSingleMovie(id);
    setSingleMovie(movie);
  };

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  const imageURL = 'https://image.tmdb.org/t/p/w500/';
  return singleMovie !== undefined ? (
    <>
      <Link to={location.state.from}>
        <button className={css.movie__button} type="button">
          &#x2190; Go back
        </button>
      </Link>
      <div className={css.movie__container}>
        <img
          className={css.movie__poster}
          src={imageURL + singleMovie.poster_path}
          alt={singleMovie.title}
        ></img>
        <div className={css.movie__details}>
          <h1>{singleMovie.title ? singleMovie.title : singleMovie.name}</h1>
          <p>Users score: {singleMovie.vote_average}</p>
          <h2>Overview</h2>
          <p>{singleMovie.overview}</p>
          <h2>Genres</h2>
          <p>
            {singleMovie.genres &&
              singleMovie.genres.map(genre => (
                <span key={genre.id}>{genre.name}, </span>
              ))}
          </p>
        </div>
      </div>
      <div>
        <h2 className={css.movie__additional}>Additional Information</h2>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: './Movies' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: './Movies' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <section className={css.outlet}>
          <Outlet />
        </section>
      </div>
    </>
  ) : (
    <div>No Details available</div>
  );
};

export default MovieDetails;
