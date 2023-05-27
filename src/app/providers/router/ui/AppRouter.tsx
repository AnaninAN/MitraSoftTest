import { memo, Suspense, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { routes } from '../lib/routes';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routes).map(renderWithWrapper)}</Routes>;
});
