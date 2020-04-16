// @flow
import * as React from 'react';
import { Button, type ButtonProps } from '../Button';
import { withTooltip } from '../Tooltip';
import { IconNewWindow } from '../Icon';

export const copyToClipboard = (str: string) => {
  if (!document.body) {
    return;
  }
  // for Flow: prevent the refinement from invalidating
  const body = document.body;

  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  body.appendChild(el);

  const currentSelection = document.getSelection();
  const selected = (currentSelection && currentSelection.rangeCount > 0)
    ? currentSelection.getRangeAt(0)
    : false;
  el.select();
  document.execCommand('copy');
  body.removeChild(el);
  if (selected) {
    let currentSelection = document.getSelection();
    if (currentSelection) {
      currentSelection.removeAllRanges();
    }

    currentSelection = document.getSelection();
    if (currentSelection) {
      currentSelection.addRange(selected);
    }
  }
};

type withCopyToClipboardProps = {
  content: string
}

// TODO: improve HOC with tooltop from CopyToClipboard
export const withCopyToClipboard = (
  Component: React.AbstractComponent<any>
) => (
  { content, ...props }: withCopyToClipboardProps
) => (
  <Component
    {...props}
    onClick={() => copyToClipboard(content)}
  />
);

type CopyToClipboardProps = {
  content: string,
  tooltipContent?: string,
  tooltipContentCopied?: string
} & $Rest<ButtonProps, {| onClick: () => void |}>

type CopyToClipboardState = {
  clicked: boolean
}

const ButtonWithTooltip = withTooltip(Button);

export class CopyToClipboard extends React.Component<CopyToClipboardProps, CopyToClipboardState> {
  static defaultProps = {
    tooltipContent: 'Copy to clipboard',
    tooltipContentCopied: 'Copied'
  }

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
      tooltipContent,
      tooltipContentCopied,
      content,
      ...props
    } = this.props;
    const { clicked } = this.state;

    return (
      <ButtonWithTooltip
        tooltipContent={clicked ? tooltipContentCopied : tooltipContent}
        icon={IconNewWindow}
        onClick={this.handleClick}
        onMouseLeave={this.resetClickedState}
        {...props}
      />
    );
  }
}