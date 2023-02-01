import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { lazy, Suspense } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => {
  return import('../pages/home/home');
});

const MovieDetails = lazy(() => {
  return import('./MovieDetails/MovieDetails');
});
const Cast = lazy(() => {
  return import('./Cast/Cast');
});

const Movies = lazy(() => {
  return import('../pages/movies/movies.js');
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
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
