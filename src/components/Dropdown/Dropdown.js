// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { IconMore } from '../Icon';
import { withDropdown } from './withDropdown';

const styles = {
  wrap: css`
    position: relative;
    display: inline-block;
  `
}

export const Dropdown = withDropdown(React.forwardRef((
  {
    className,
    children = <Button icon={IconMore} intent='base' />,
    ...props
  },
  ref
) =>
  <div
    className={cx(styles.wrap, className)}
    {...props}
    ref={ref}
  >
    {children}
  </div>
));
