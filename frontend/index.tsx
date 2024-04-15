import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './src/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { checkUserAction } from './src/redux/userSlice/apiUserActions';
import { getToken } from './src/services/tokens';
import HistoryRouter from './src/components/history-router/history-router';
import browserHistory from './src/browser-history';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const token = getToken();
if (token) {
  store.dispatch(checkUserAction());
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ToastContainer limit={3} />
      </HistoryRouter>
    </Provider>
  </StrictMode>,
);
