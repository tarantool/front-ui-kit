// @flow

import React from 'react';
import { css, cx } from 'emotion';
import { Text } from '../Text';
import { IconChevronDown, IconChevron } from '../Icon';
import { Button } from '../Button';

type ExpandableBlockProps = {
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

export const ExpandableBlock = (props: ExpandableBlockProps) => {
  const [ fullIsShowing, setShowFull ] = React.useState(false);

  const splitedContent: string[] = props.content.split('\n');
  const countTextLines: number = splitedContent.length;

  if ((countTextLines <= props.visibleLines)) {
    return (
      <Text className={cx(textStyle, props.className)}>
        {props.content}
      </Text>
    )
  }

  const content = fullIsShowing
    ? props.content
    : splitedContent.slice(0, props.visibleLines).join('\n');

  return (
    <>
      <Text
        tag="div"
        className={cx(
          { [textOverflowStyle]: !fullIsShowing },
          textStyle,
          props.className
        )}
      >
        {content}
      </Text>
      <Button
        onClick={setShowFull.bind(undefined, !fullIsShowing)}
        iconRight={fullIsShowing ? IconChevron : IconChevronDown}
        className={btnStyle}
        text={fullIsShowing ? 'less' : 'more'}
        intent="plain"
      />
    </>
  )
};
