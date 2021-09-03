import { css } from '@emotion/css';

/**
 * based on original okaidia theme from prismjs
 */

export default css`
  color: #f8f8f2;
  background: none;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  & .token.comment,
  & .token.prolog,
  & .token.doctype,
  & .token.cdata {
    color: slategray;
  }

  & .token.punctuation {
    color: #f8f8f2;
  }

  & .token.namespace {
    opacity: 0.7;
  }

  & .token.property,
  & .token.tag,
  & .token.constant,
  & .token.symbol,
  & .token.deleted {
    color: #f92672;
  }

  & .token.boolean,
  & .token.number {
    color: #ae81ff;
  }

  & .token.selector,
  & .token.attr-name,
  & .token.string,
  & .token.char,
  & .token.builtin,
  & .token.inserted {
    color: #a6e22e;
  }

  & .token.operator,
  & .token.entity,
  & .token.url,
  & .language-css .token.string,
  & .style .token.string,
  & .token.variable {
    color: #f8f8f2;
  }

  & .token.atrule,
  & .token.attr-value,
  & .token.function,
  & .token.class-name {
    color: #e6db74;
  }

  & .token.keyword {
    color: #66d9ef;
  }

  & .token.regex,
  & .token.important {
    color: #fd971f;
  }

  & .token.important,
  & .token.bold {
    font-weight: bold;
  }
  & .token.italic {
    font-style: italic;
  }

  & .token.entity {
    cursor: help;
  }
`;
