import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

import {BrowserRouter, MemoryRouter} from 'react-router-dom';

  ReactDOM.render((
    <MemoryRouter>
      <Main />
    </MemoryRouter>),
    document.getElementById('root')
  );

  
  