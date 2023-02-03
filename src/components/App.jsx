import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => {
  return import('../pages/home/Home');
});

const MovieDetails = lazy(() => {
  return import('../pages/MovieDetails/MovieDetails');
});
const Cast = lazy(() => {
  return import('./Cast/Cast');
});

const Movies = lazy(() => {
  return import('../pages/movies/Movies');
});

const Reviews = lazy(() => {
  return import('./Reviews/Reviews');
});

export const App = () => {
  
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
