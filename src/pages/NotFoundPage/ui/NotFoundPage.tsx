import cls from './NotFoundPage.module.scss';

import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

const NotFoundPage = () => {
  return (
    <div className={classNames(cls.notFoundPage)}>Страница не найдена</div>
  );
};

export default memo(NotFoundPage);
