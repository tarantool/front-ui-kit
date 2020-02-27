// @flow
import * as React from 'react';
import { createRef } from 'react';
import { cx, css } from 'emotion';
import Prism from 'prismjs';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-ruby';

import theme from './themes/okaidia';
import { textStyles } from '../Text';
import { CopyToClipboard } from '../CopyToClipboard';

type CodeBlockProps = {
  className?: string,
  text: React.Node,
  language: 'lua' | 'python' | 'js' | 'javascript' | 'jsx' | 'php' | 'go' | 'ruby'
};

const styles = {
  wrap: css`
    position: relative;

    & > button {
      transition: opacity ease-in-out 0.3s;
    }

    & > button:not(:focus) {
      opacity: 0;
    }

    &:hover > button {
      opacity: 1;
    }
  `,
  copyBtn: css`
    position: absolute;
    top: 0;
    right: 0;
  `
}

export class CodeBlock extends React.Component<CodeBlockProps> {
  static defaultProps = { language: 'javascript' };

  ref = createRef<HTMLElement>();

  componentDidMount() {
    Prism.highlightElement(this.ref.current);
  }

  componentDidUpdate() {
    Prism.highlightElement(this.ref.current);
  }

  render() {
    const { className, text, language } = this.props;

    return (
      <div className={cx(styles.wrap, className)}>
        <code
          ref={this.ref}
          className={cx(
            textStyles.code,
            theme,
            { [`language-${language}`]: language }
          )}
        >
          {text}
        </code>
        <CopyToClipboard
          className={styles.copyBtn}
          icon={null}
          textToCopy={text}
          intent='plain'
          size='s'
        >
          Copy
        </CopyToClipboard>
      </div>
    );
  }
}
