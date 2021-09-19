import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender, queries } from '@testing-library/react';

import { initStore } from '../../store';

function render(ui, { preloadedState = {}, store = initStore({ preloadedState }), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return rtlRender(ui, { queries, wrapper: Wrapper, ...renderOptions });
}

async function waitMillis(millis = 0) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

export * from '@testing-library/react';
export { render, waitMillis };
