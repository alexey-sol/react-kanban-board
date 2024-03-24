import { AppWithProviders } from './app';
import { getRootElement } from './utils/helpers/dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(getRootElement());

root.render(<AppWithProviders />);
