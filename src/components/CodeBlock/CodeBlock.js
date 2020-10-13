// @flow
import * as React from 'react';
import { SyntaxHighlight } from '../SyntaxHighlight';
import { CodeBlockWrap } from './CodeBlockWrap';

type CodeBlockProps = {
  className?: string,
  copyBtn?: bool,
  text: string,
  language?: 'lua' | 'python' | 'js' | 'javascript' | 'jsx' | 'php' | 'go' | 'ruby'
};

export const CodeBlock = (
  {
    className,
    copyBtn = true,
    text,
    language
  }: CodeBlockProps
) => (
  <CodeBlockWrap className={className} textToCopy={copyBtn ? text : null}>
    <SyntaxHighlight
      text={text}
      language={language}
    />
  </CodeBlockWrap>
);
