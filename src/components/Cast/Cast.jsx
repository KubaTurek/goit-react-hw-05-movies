import { useEffect, useState } from 'react';
import { fetchCast } from 'components/api/api';
import css from './Cast.module.css';
import noPhoto from './../../images/photo.jpg';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const photo = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();

  const [castDetails, setCastDetails] = useState();

  const getCastDetails = async id => {
    const cast = await fetchCast(id);
    setCastDetails(cast.data.cast);
  };

  useEffect(() => {
    getCastDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {castDetails === undefined || castDetails.length === 0 ? (
          <p>There are no casts available for this movie</p>
        ) : (
          castDetails.map(cast => (
            <li className={css.cast__list} key={cast.id}>
              {cast.profile_path !== undefined && cast.profile_path !== null ? (
                <img
                  src={`${photo}${cast.profile_path}`}
                  alt={cast.title}
                  height="100"
                ></img>
              ) : (
                <img
                  className={css.cast__nophoto}
                  src={noPhoto}
                  alt="not available"
                ></img>
              )}

              <div>
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
