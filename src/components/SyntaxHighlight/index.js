// @flow
import * as React from 'react';
import { createRef } from 'react';
import { cx } from '@emotion/css';
import Prism from 'prismjs';

import theme from './themes/okaidia';
import { textStyles } from '../Text';

require('prismjs/components/prism-go');
require('prismjs/components/prism-lua');
require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-python');
require('prismjs/components/prism-php');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-ruby');

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
