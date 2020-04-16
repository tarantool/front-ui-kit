// @flow
import * as React from 'react';
import type { ComponentType } from 'react'
import { css, cx } from 'emotion';
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
    height: 182px;
    fill: rgba(0, 0, 0, 0.25);
  `,
  iconMargin: css`
    margin-bottom: 24px;
  `,
  description: css`
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
  `,
  title: css`
    margin-bottom: 8px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
  `,
  error: css`
    color: #F5222D;
  `
};

type NonIdealStateProps = {
  children?: React.Node,
  className?: string,
  icon?: ComponentType<any>, // deprecated
  image?: SVGGlyph, // will be reqired
  title?: string,
  description?: string,
  isError?: bool,
};

export const NonIdealState = (
  {
    children,
    className,
    icon: Icon,
    image,
    title,
    description,
    isError
  }: NonIdealStateProps
) => (
  <div className={cx(styles.wrap, className)}>
    {image
      ? (
        <SVGImage
          glyph={image}
          className={cx({ [styles.iconMargin]: title || description })}
        />
      )
      : null}
    {Icon && !image
      ? <Icon className={cx(styles.icon, { [styles.iconMargin]: title || description })} />
      : null
    }
    {title && <Text variant='h2' className={cx(styles.title, { [styles.error]: isError })}>{title}</Text>}
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
  isError?: bool,
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
    isError,
    onActionClick,
    title
  }: NonIdealStateActionProps
) => (
  <NonIdealState
    className={className}
    description={description}
    icon={icon}
    image={image}
    isError={isError}
    title={title}
  >
    <Button autoFocus text={actionText} onClick={onActionClick} />
  </NonIdealState>
);
