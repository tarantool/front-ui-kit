// @flow
import * as React from 'react';
import MD from 'markdown-to-jsx';
import { css, cx } from '@emotion/css';
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
      background-color: ${colors.dark};
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
  blockquote: css`
    padding: 10px 40px 1px;
    border-radius: 4px;
    margin: 10px 0 20px;
    background-color: ${colors.baseBg};
  `,
  h: css`
    margin: 20px 0 10px;
    color: #000;
  `,
  p: css`
    margin: 10px 0 20px;
  `,
  ul: css`
    padding-left: 24px;
    margin: 10px 0 20px;
  `,
  li: css`
    margin: 10px 0;
  `,
  img: css`
    max-width: 100%;
  `,
};

type Props = {
  className?: string,
  overrides?: { [key: string]: React.Component<any, any> },
  text: string,
};

const components = {
  h1: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h1">
      {children}
    </Text>
  ),
  h2: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h2">
      {children}
    </Text>
  ),
  h3: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h3">
      {children}
    </Text>
  ),
  h4: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h4">
      {children}
    </Text>
  ),
  h5: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h5">
      {children}
    </Text>
  ),
  h6: ({ children, ...props }) => (
    <Text {...props} className={styles.h} variant="h6">
      {children}
    </Text>
  ),
  p: ({ children, ...props }) => (
    <Text {...props} className={styles.p} variant="basic" tag="p">
      {children}
    </Text>
  ),
  a: ({ children, ...props }) => (
    <Link {...props} target="_blank">
      {children}
    </Link>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote {...props} className={styles.blockquote}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }) =>
    className && className.indexOf('lang-') === 0 ? (
      <SyntaxHighlight language={className.substr(5)} text={children} />
    ) : (
      <Text {...props} variant="code">
        {children}
      </Text>
    ),
  pre: ({ children }) => {
    const { props: { children: childrenText } = {} } = children;
    return (
      <CodeBlockWrap className={styles.pre} textToCopy={childrenText}>
        {children}
      </CodeBlockWrap>
    );
  },
  ul: ({ children, ...props }) => (
    <Text {...props} className={styles.ul} tag="ul">
      {children}
    </Text>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className={styles.li}>
      {children}
    </li>
  ),
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img {...props} className={styles.img} />,
};

export const Markdown = ({ className, overrides, text }: Props) => {
  const options = { overrides: Object.assign({}, components, overrides), forceBlock: true };

  return (
    <div className={cx(styles.wrap, className)}>
      <MD options={options}>{text}</MD>
    </div>
  );
};
