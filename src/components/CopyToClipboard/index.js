// @flow
import * as React from 'react';
import { Button, type ButtonProps } from '../Button';
import { withTooltip } from '../Tooltip';
import { IconCopy } from '../Icon';

export const copyToClipboard = (str: string) => {
  if (!document.body) {
    return;
  }
  // for Flow: prevent the refinement from invalidating
  const body = document.body;
  const range = new Range();
  const currentSelection = window.getSelection();
  const el = document.createElement('pre');

  el.innerText = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  body.appendChild(el);

  range.selectNodeContents(el);
  currentSelection.removeAllRanges();
  currentSelection.addRange(range);

  document.execCommand('copy');

  currentSelection.removeAllRanges();
  body.removeChild(el);
};

type withCopyToClipboardProps = {
  content: string,
  tooltipContent?: string,
  tooltipContentCopied?: string
}

type CopyToClipboardState = {
  clicked: boolean
}

export const withCopyToClipboard = (
  Component: React.AbstractComponent<any, any>
) => class extends React.PureComponent<withCopyToClipboardProps, CopyToClipboardState> {
  static defaultProps = {
    tooltipContent: 'Copy to clipboard',
    tooltipContentCopied: 'Copied'
  }

  ComponentWithTooltip = withTooltip(Component);

  state = { clicked: false };

  tooltipIntervalId = null;

  handleClick = () => {
    copyToClipboard(this.props.content);
    this.setState({ clicked: true });

    if (this.tooltipIntervalId) clearInterval(this.tooltipIntervalId);

    this.tooltipIntervalId = setInterval(
      this.resetClickedState,
      3000
    )
  }

  resetClickedState = () => {
    if (this.tooltipIntervalId) clearInterval(this.tooltipIntervalId);
    this.setState({ clicked: false });
  }

  componentWillUnmount() {
    if (this.tooltipIntervalId) clearInterval(this.tooltipIntervalId);
  }

  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      content,
      tooltipContent,
      tooltipContentCopied,
      ...restProps
    } = this.props;
    const { clicked } = this.state;
    const { ComponentWithTooltip } = this;

    return (
      <ComponentWithTooltip
        {...restProps}
        tooltipContent={clicked ? tooltipContentCopied : tooltipContent}
        onClick={this.handleClick}
        onMouseLeave={this.resetClickedState}
      />
    );
  }
}

type CopyToClipboardProps = {|
  ...$Exact<$Rest<ButtonProps, { onClick: (e: MouseEvent) => void }>>,
  ...$Exact<withCopyToClipboardProps>
|}

const CopyButton = withCopyToClipboard(Button);

export const CopyToClipboard = (
  {
    icon,
    ...rest
  }: CopyToClipboardProps
) => (
  <CopyButton
    {...rest}
    icon={icon || IconCopy}
  />
);
