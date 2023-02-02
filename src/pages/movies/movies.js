import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuery } from 'components/api/fetchapi';
import css from './movies.module.css';

const Movies = () => {
  const [queryDetails, setQueryDetails] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const imageURL = 'https://image.tmdb.org/t/p/w500/';

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.input.value });
  };

  const fetchQueryDetails = async value => {
    setQueryDetails('');
    const results = await fetchQuery(value);
    setQueryDetails(results);
  };

  useEffect(() => {
    fetchQueryDetails(query);
  }, [query]);

  return (
    <div>
      <div className={css.search__form}>
        <form onSubmit={event => onSubmit(event)}>
          <input
            className={css.search__input}
            type="text"
            placeholder="search a film"
            name="input"
          ></input>
          <button className={css.search__button} type="submit">
            Search
          </button>
        </form>
      </div>
      <ul className={css.search__container}>
        {!queryDetails ||
        queryDetails.results === undefined ||
        queryDetails.results.length === 0 ||
        query === null ? (
          <p></p>
        ) : (
          queryDetails.results.map(result => (
            <li key={result.id} className={css.search__item}>
              <Link
                to={`${result.id}`}
                state={{ from: `/Movies/?query=${query}` }}
              >
                <img
                  className={css.image}
                  alt={result.title}
                  src={`${imageURL}${result.poster_path}`}
                />
                <p>{result.title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Movies;
