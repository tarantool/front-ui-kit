import * as React from 'react';
import MD from 'markdown-to-jsx';
import { css, cx } from 'emotion';
import { Link } from '../Link';
import { Text } from '../Text';

const styles = {
  wrap: css`
    & code {
      padding: 3px;
      border-radius: 3px;
      background-color: #eeeeee;
    }

    & pre {
      display: block;
      padding: 16px;
      margin-top: 21px;
      margin-bottom: 21px;
      border-radius: 4px;
      background-color: #f6f8fa;

      & > code {
        padding: 0;
        border-radius: 0;
        background-color: transparent;
      }
    }
  `,
  h1: css`
    margin-top: 30px;
    margin-bottom: 30px;
  `,
  h: css`
    margin-top: 21px;
    margin-bottom: 21px;
  `,
  p: css`
    margin-top: 17px;
    margin-bottom: 17px;
  `
};

const overrides = {
  h1: ({ children, ...props }) => (<Text {...props} className={styles.h1} variant='h1'>{children}</Text>),
  h2: ({ children, ...props }) => (<Text {...props} className={styles.h} variant='h2'>{children}</Text>),
  h3: ({ children, ...props }) => (<Text {...props} className={styles.h} variant='h3'>{children}</Text>),
  h4: ({ children, ...props }) => (<Text {...props} className={styles.h} variant='h4'>{children}</Text>),
  h5: ({ children, ...props }) => (<Text {...props} className={styles.h} variant='h5'>{children}</Text>),
  h6: ({ children, ...props }) => (<Text {...props} className={styles.h} variant='h6'>{children}</Text>),
  p: ({ children, ...props }) => (<Text {...props} className={styles.p} variant='basic' tag='p'>{children}</Text>),
  a: ({ children, ...props }) => (<Link {...props}>{children}</Link>),
  code: ({ children, ...props }) => (<Text {...props} variant='code'>{children}</Text>)
};

export const Markdown = ({
  text
}) => (
  <MD
    className={styles.wrap}
    options={{ overrides }}
  >
    {text}
  </MD>
);
