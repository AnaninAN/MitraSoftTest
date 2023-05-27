import { Suspense } from 'react';

import { AppRouter } from './providers/router';
import { AppNavbar } from '@/widgets/AppNavbar';
import { Container } from 'react-bootstrap';

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <AppNavbar />
        <Container>
          <AppRouter />
        </Container>
      </Suspense>
    </div>
  );
};
