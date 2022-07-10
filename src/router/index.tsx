import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from 'pages';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
