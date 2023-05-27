import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    // имитация загрузки страницы
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 1000);
    })
);
