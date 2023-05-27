import cls from './PageLoader.module.scss';

import { memo } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { classNames } from '@/shared/lib/classNames/classNames';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
  <div className={classNames(cls.pageLoader, {}, [className])}>
    <Spinner animation="grow" />
  </div>
));
