import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Movie, Search } from 'pages';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="/search" element={<Search />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
