// @flow

import React from 'react';
import { css, cx } from 'emotion';
import { Text } from '../Text';
import { IconChevronDown } from '../Icon';
import { Button } from '../Button';

type ExpandedBlockProps = {
  content: string,
  visibleLines: number,
  className?: string,
}

const textStyle = css`
  white-space: pre-wrap;
`;

const textOverflowStyle = css`
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
      pointer-events: none;
    }
`;

const btnStyle = css`
 display: block;
`;

export const ExpandedBlock = (props: ExpandedBlockProps) => {
  const [ fullIsShowing, setShowFull ] = React.useState(false);

  const splitedContent: string[] = props.content.split('\n');
  const countTextLines: number = splitedContent.length;

  if ((countTextLines <= props.visibleLines) || fullIsShowing) {
    return (
      <Text className={cx(textStyle, props.className)}>
        {props.content}
      </Text>
    )
  }

  return (
    <>
      <Text tag="div" className={cx(textOverflowStyle, textStyle, props.className)}>
        {splitedContent.slice(0, props.visibleLines).join('\n')}
      </Text>
      <Button
        onClick={setShowFull.bind(undefined, true)}
        iconRight={IconChevronDown}
        className={btnStyle}
        text="more"
        intent="plain"
      />
    </>
  )
};
