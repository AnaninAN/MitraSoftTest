import '@/app/styles/index.scss';

import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);