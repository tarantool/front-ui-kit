// @flow
import React from 'react';
import { css, cx } from 'emotion';
import { useDropzone } from 'react-dropzone';
import { IconBox, IconSpinner } from '../Icon';
import { Text } from '../Text';
import { colors } from '../../variables';

const styles = {
  wrap: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${colors.intentBase};
    border-style: dashed;
    background-color: ${colors.intentBaseActive};
    transition: border .24s ease-in-out;
    outline: none;
    cursor: pointer;
  `,
  dragover: css`
    border-color: ${colors.intentPrimary};
  `,
  icon: css`
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    fill: ${colors.intentBase};
  `,
  notice: css`
    margin-top: 10px;
    color: ${colors.dark65};
    text-align: center;
    white-space: pre-line;
  `
};

type UploadZoneProps = {
  accept?: string,
  handler?: Function,
  name: string,
  multiple?: boolean,
  className?: string,
  title?: string,
  subTitle?: string,
  loading?: bool
}

export const UploadZone = (
  {
    accept = '',
    handler,
    name,
    multiple,
    className,
    title,
    subTitle,
    loading
  }: UploadZoneProps
) => {
  const Icon = loading ? IconSpinner : IconBox;

  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    accept,
    multiple,
    onDrop: handler
  });

  const { ref, ...rootProps } = getRootProps({
    isDragAccept
  })

  return (
    <div
      className={cx(
        styles.wrap,
        { [styles.dragover]: isDragAccept },
        className
      )}
      ref={ref}
      {...rootProps}
    >
      <input {...getInputProps()} name={name}/>
      <Icon className={styles.icon} />
      <Text variant='h3' tag='span'>
        {loading
          ? 'Uploading...'
          : title || 'Click or drag file to this area to upload'}
      </Text>
      {!!subTitle && !loading && <Text className={styles.notice}>{subTitle}</Text>}
    </div>
  );
}
