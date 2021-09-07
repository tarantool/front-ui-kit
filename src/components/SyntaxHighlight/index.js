// @flow
import React, { createRef } from 'react';
import { cx } from '@emotion/css';
import Prism from 'prismjs';

import { textStyles } from '../Text';
import theme from './themes/okaidia';

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
  language?: 'lua' | 'python' | 'js' | 'javascript' | 'jsx' | 'php' | 'go' | 'ruby',
};

export class SyntaxHighlight extends React.Component<SyntaxHighlightProps> {
  ref = createRef<HTMLElement>();

  highlight() {
    if (this.ref.current && this.props.language) {
      Prism.highlightElement(this.ref.current);
    }
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  render() {
    const { className, text, language } = this.props;

    return (
      <code
        ref={this.ref}
        className={cx(textStyles.code, theme, { [`language-${language || ''}`]: language }, className)}
      >
        {text}
      </code>
    );
  }
}
