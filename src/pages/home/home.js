import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'components/api/fetchapi';
import css from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async () => {
    const movies = await fetchTrending();
    setTrendingMovies(movies);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const imageURL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className={css.home}>
      <h1 className={css.home__title}>Trending Today</h1>
      <ul className={css.trending}>
        {trendingMovies !== undefined &&
          trendingMovies.map(movie => {
            return (
              <li className={css.home__list} key={movie.id}>
                <Link
                  state={{ from: '/' }}
                  className={css.link}
                  to={`./Movies/${movie.id}`}
                >
                  <img
                    alt={`${movie.title}`}
                    className={css.trending__image}
                    src={`${imageURL}${movie.poster_path}`}
                  />
                  <p>{movie.title ? movie.title : movie.name}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
