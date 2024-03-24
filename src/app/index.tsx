import { withProviders } from './app-providers.tsx';
import { AppRoutes } from './app-routes.tsx';
import { Layout } from '@/components/Layout';
import { type FC } from 'react';

export const App: FC = () => (
  <Layout>
    <AppRoutes />
  </Layout>
);

export const AppWithProviders = withProviders(App);
