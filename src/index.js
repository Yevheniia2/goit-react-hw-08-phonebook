import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
// import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
);