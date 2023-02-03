import { useEffect, useState } from 'react';
import { fetchReviews } from 'components/api/api';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewDetails, setReviewDetails] = useState();

  const fetchReviewsDetails = async id => {
    const reviews = await fetchReviews(id);
    setReviewDetails(reviews);
  };

  useEffect(() => {
    fetchReviewsDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      <ul className={css.reviews}>
        {reviewDetails === undefined || reviewDetails.length === 0 ? (
          <p>There are no reviews available for this movie</p>
        ) : (
          reviewDetails.map(review => (
            <li className={css.review__item} key={review.id}>
              <div className={css.rewievs__title}>
                <h3 className={css.review__author}>Author: </h3>
                <span>{review.author}</span>
              </div>
              <p className={css.review__text}>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
