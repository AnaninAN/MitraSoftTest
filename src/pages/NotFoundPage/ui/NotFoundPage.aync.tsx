import { lazy } from 'react';

export const NotFoundPageAsync = lazy(
  () =>
    // имитация загрузки страницы
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./NotFoundPage')), 1000);
    })
);
