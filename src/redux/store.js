import {
  configureStore
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { contactsReducer } from './../redux/slices/contactSlice';
import { filterReducer  } from './../redux/slices/filterSlice';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

// const persistedReducer = persistReducer(persistConfig, persistedContactReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }), logger],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);