import React from 'react';

import { Navbar } from 'components';
import { Router } from 'router';

import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div className="container">
        <Router />
      </div>
    </>
  );
}

export default App;
