import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {Home} from 'modules/Home';
import {reportWebVitals} from 'reportWebVitals';
import {routes} from 'shared/constants/routes';
import {BaseLayout} from 'shared/layouts/Base/BaseLayout';
import store from 'store';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<BaseLayout />}>
            <Route path={routes.home} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
