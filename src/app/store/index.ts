import { ignoredActions } from './middleware';
import { persistedReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore } from 'redux-persist';

const isDevelopment = process.env.NODE_ENV === 'development';

export const store = configureStore({
  devTools: isDevelopment,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions } }),
  reducer: persistedReducer,
} as const);

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
