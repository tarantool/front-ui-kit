import * as React from 'react';
import MD from 'markdown-to-jsx';
import { css } from 'emotion';
import { colors, monoFontFamily } from '../../variables';
import { CodeBlockWrap } from '../CodeBlock';
import { SyntaxHighlight } from '../SyntaxHighlight';
import { Link } from '../Link';
import { Text } from '../Text';

const styles = {
  wrap: css`
    display: block;

    & code {
      padding: 3px;
      border-radius: 3px;
      background-color: ${colors.codeBg};
      color: white;
      font-family: ${monoFontFamily};
    }
  `,
  pre: css`
    margin-bottom: 16px;

    & > code {
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }
  `,
  h: css`
    margin-bottom: 16px;
    color: #000;
  `,
  p: css`
    margin-bottom: 20px;
  `,
  ul: css`
    padding-left: 24px;
    margin-bottom: 20px;
  `
};

const overrides = {
  h1: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h1'>{children}</Text>,
  h2: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h2'>{children}</Text>,
  h3: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h3'>{children}</Text>,
  h4: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h4'>{children}</Text>,
  h5: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h5'>{children}</Text>,
  h6: ({ children, ...props }) => <Text {...props} className={styles.h} variant='h6'>{children}</Text>,
  p: ({ children, ...props }) => <Text {...props} className={styles.p} variant='basic' tag='p'>{children}</Text>,
  a: ({ children, ...props }) => <Link {...props} target='_blank'>{children}</Link>,
  code: ({ children, className, ...props }) => (
    className && className.indexOf('lang-') === 0
      ? <SyntaxHighlight language={className.substr(5)} text={children} />
      : <Text {...props} variant='code'>{children}</Text>
  ),
  pre: ({ children, ...props }) => {
    const { props: { children: childrenText } = {} } = children;
    return <CodeBlockWrap className={styles.pre} textToCopy={childrenText}>{children}</CodeBlockWrap>
  },
  ul: ({ children, ...props }) => <Text {...props} className={styles.ul} tag='ul'>{children}</Text>
};

const options = { overrides, forceBlock: true };

export const Markdown = ({
  text
}) => (
  <div className={styles.wrap}>
    <MD options={options}>{text}</MD>
  </div>
);
