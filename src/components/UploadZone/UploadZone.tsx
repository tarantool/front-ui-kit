import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { cx } from '@emotion/css';

import { TarantoolLogoSpinner } from '../TarantoolLogoSpinner';
import { Text } from '../Text';
import { IconDragFile } from './IconDragFile';

import { styles } from './UploadZone.styles';

export type UploadZoneHandler = DropzoneOptions['onDrop'];

export interface UploadZoneProps {
  accept?: string;
  handler?: UploadZoneHandler;
  name: string;
  multiple?: boolean;
  className?: string;
  title?: string;
  subTitle?: string;
  loading?: boolean;
}

export const UploadZone = ({
  accept = '',
  handler,
  name,
  multiple,
  className,
  title,
  subTitle,
  loading,
}: UploadZoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple,
    onDrop: handler,
  });

  return (
    <div
      className={cx(
        styles.root,
        {
          [styles.dragover]: isDragActive,
        },
        className
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} name={name} />
      {loading ? <TarantoolLogoSpinner className={styles.preloader} /> : <IconDragFile className={styles.icon} />}
      <Text variant="h3" tag="span">
        {loading ? 'Uploading...' : title || 'Click or drag file to this area to upload'}
      </Text>
      {!!subTitle && !loading && <Text className={styles.notice}>{subTitle}</Text>}
    </div>
  );
};
