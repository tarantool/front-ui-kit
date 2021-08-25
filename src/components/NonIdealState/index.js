// @flow
import * as React from 'react';
import type { ComponentType } from 'react'
import { css, cx } from '@emotion/css';
import { colors } from '../../variables';
import { Button } from '../Button';
import { Text } from '../Text';
import { SVGImage } from '../SVGImage';

const styles = {
  wrap: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  `,
  icon: css`
    width: 200px;
    height: 74px;
    fill: rgba(0, 0, 0, 0.25);
  `,
  image: css`
    width: 200px;
    height: 74px;
  `,
  iconMargin: css`
    margin-bottom: 10px;
  `,
  description: css`
    margin-bottom: 16px;
    color: ${colors.dark65};
    text-align: center;
  `,
  title: css`
    margin-bottom: 10px;
    font-weight: 600;
  `
};

type NonIdealStateProps = {
  children?: React.Node,
  className?: string,
  icon?: ComponentType<any>, // deprecated
  image?: SVGGlyph, // will be required
  imageClassName?: string,
  title?: string,
  description?: string
};

export const NonIdealState = (
  {
    children,
    className,
    icon: Icon,
    image,
    imageClassName,
    title,
    description
  }: NonIdealStateProps
) => (
  <div className={cx(styles.wrap, className)}>
    {image
      ? (
        <SVGImage
          glyph={image}
          className={cx(styles.icon, { [styles.iconMargin]: title || description }, imageClassName)}
        />
      )
      : null}
    {Icon && !image
      ? <Icon className={cx(styles.icon, { [styles.iconMargin]: title || description }, imageClassName)} />
      : null
    }
    {title && <Text variant='h2' className={styles.title}>{title}</Text>}
    {description && <Text className={styles.description}>{description}</Text>}

    {children}
  </div>
);


type NonIdealStateActionProps = {
  actionText: string,
  children?: React.Node,
  className?: string,
  description?: string,
  icon?: ComponentType<any>, // deprecated
  image?: SVGGlyph, // will be reqired
  onActionClick: (e: MouseEvent) => void,
  title: string,
};

export const NonIdealStateAction = (
  {
    actionText,
    className,
    description,
    icon,
    image,
    onActionClick,
    title
  }: NonIdealStateActionProps
) => (
  <NonIdealState
    className={className}
    description={description}
    icon={icon}
    image={image}
    title={title}
  >
    <Button autoFocus text={actionText} onClick={onActionClick} />
  </NonIdealState>
);
