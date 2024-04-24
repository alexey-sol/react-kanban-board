import {
  persistor,
  store,
} from './store';
import { GlobalStyle } from '@/app/style/global';
import { theme } from '@/app/style/theme';
import { compose } from '@reduxjs/toolkit';
import {
  type FC,
  StrictMode,
  Suspense,
} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

type WithProvider = (component: FC<void>) => FC<void>;

export const withStore: WithProvider = (component) => () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {component()}
    </PersistGate>
  </Provider>
);

export const withRouter: WithProvider = (component) => () => (
  <BrowserRouter>
    <Suspense fallback={<section>...</section>}>
      {component()}
    </Suspense>
  </BrowserRouter>
);

export const withTheme: WithProvider = (component) => () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {component()}
  </ThemeProvider>
);

export const withChecks: WithProvider = (component) => () => (
  <StrictMode>
    {component()}
  </StrictMode>
);

export const withProviders = compose<FC>(
  withStore,
  withRouter,
  withTheme,
  withChecks,
);
