// @flow
import React from 'react';
import { css, cx } from '@emotion/css';
import { noop } from 'lodash';

import { Button } from '../Button';
import { CopyToClipboard } from '../CopyToClipboard';
import { IconChevron } from '../Icon';
import { Text } from '../Text';

type ExpandableBlockProps = {
  content: string,
  visibleLines: number,
  className?: string,
  showCopyBtn?: boolean,
};

const styles = {
  textStyle: css`
    white-space: pre-wrap;
  `,
  btnStyle: css`
    display: block;
  `,
  textOverflowStyle: css`
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
      pointer-events: none;
    }
  `,
  withBtn: css`
    position: relative;
  `,
  copyBtn: css`
    position: absolute;
    top: 0;
    right: 0px;
  `,
  contentWrapper: css`
    margin-right: 30px;
  `,
};

const ExpandableBlockContent = (props: ExpandableBlockProps) => {
  const [fullIsShowing, setShowFull] = React.useState(false);

  const splitedContent: string[] = props.content.split('\n');
  const countTextLines: number = splitedContent.length;

  if (countTextLines <= props.visibleLines) {
    return <Text className={cx(styles.textStyle, props.className)}>{props.content}</Text>;
  }

  const content = fullIsShowing ? props.content : splitedContent.slice(0, props.visibleLines).join('\n');

  return (
    <>
      <Text
        tag="div"
        onClick={!fullIsShowing ? setShowFull.bind(undefined, true) : noop}
        className={cx({ [styles.textOverflowStyle]: !fullIsShowing }, styles.textStyle, props.className)}
      >
        {content}
      </Text>
      {fullIsShowing && (
        <Button
          onClick={setShowFull.bind(undefined, false)}
          iconRight={IconChevron}
          className={styles.btnStyle}
          text="less"
          intent="plain"
        />
      )}
    </>
  );
};

export const ExpandableBlock = (props: ExpandableBlockProps) => {
  if (props.showCopyBtn) {
    return (
      <div className={cx(styles.withBtn)}>
        {props.showCopyBtn && (
          <CopyToClipboard className={styles.copyBtn} intent="plain" content={props.content} size="s" />
        )}
        <ExpandableBlockContent {...props} className={cx(styles.contentWrapper, props.className)} />
      </div>
    );
  }

  return <ExpandableBlockContent {...props} />;
};
