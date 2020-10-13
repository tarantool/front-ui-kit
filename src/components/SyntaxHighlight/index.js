// @flow
import * as React from 'react';
import { createRef } from 'react';
import { cx } from 'emotion';
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

type SyntaxHighlightProps = {
  className?: string,
  text: string,
  language?: 'lua' | 'python' | 'js' | 'javascript' | 'jsx' | 'php' | 'go' | 'ruby'
};

export class SyntaxHighlight extends React.Component<SyntaxHighlightProps> {
  ref = createRef<HTMLElement>();

  componentDidMount() {
    if (this.ref.current && this.props.language) {
      Prism.highlightElement(this.ref.current);
    }
  }

  componentDidUpdate() {
    if (this.ref.current && this.props.language) {
      Prism.highlightElement(this.ref.current);
    }
  }

  render() {
    const { className, text, language } = this.props;

    return (
      <code
        ref={this.ref}
        className={cx(
          textStyles.code,
          theme,
          { [`language-${language || ''}`]: language },
          className
        )}
      >
        {text}
      </code>
    );
  }
}
