import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    // имитация загрузки страницы
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1000);
    })
);
