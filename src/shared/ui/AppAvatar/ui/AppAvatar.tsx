import cls from './AppAvatar.module.scss';

import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const AppAvatar = memo((props: AppAvatarProps) => {
  const { className, src, size = 100, alt } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
});
