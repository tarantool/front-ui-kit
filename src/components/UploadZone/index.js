// @flow
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { css, cx } from '@emotion/css';
import styled from '@emotion/styled';

import { colors } from '../../variables';
import { TarantoolLogoSpinner } from '../TarantoolLogoSpinner';
import { Text } from '../Text';
import { IconDragFile } from './IconDragFile';

const styles = {
  wrap: css`
    display: flex;
  `,
  icon: css`
    width: 100px;
    height: 80px;
    margin-bottom: 16px;
  `,
  preloader: css`
    width: 68px;
    height: 48px;
    margin-bottom: 16px;
  `,
  notice: css`
    margin-top: 10px;
    color: ${colors.dark65};
  `,
};

const getColor = ({ isDragAccept }) => (isDragAccept ? colors.intentPrimary : colors.intentBase);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: ${colors.intentBaseActive};
  transition: border 0.24s ease-in-out;
  outline: none;
  cursor: pointer;
`;

type UploadZoneProps = {
  accept?: string,
  handler?: Function,
  name: string,
  multiple?: boolean,
  className?: string,
  title?: string,
  subTitle?: string,
  loading?: boolean,
  files?: Array<File>,
};

export const UploadZone = ({
  accept = '',
  handler,
  name,
  multiple,
  className,
  title,
  subTitle,
  loading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  files, // TODO: 'files' is defined but never used
}: UploadZoneProps) => {
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept,
    multiple,
    onDrop: handler,
  });

  const { ref, ...rootProps } = getRootProps({
    isDragAccept,
  });

  return (
    <div className={cx(styles.wrap, className)} ref={ref}>
      <Container {...rootProps}>
        <input {...getInputProps()} name={name} />
        {loading ? <TarantoolLogoSpinner className={styles.preloader} /> : <IconDragFile className={styles.icon} />}
        <Text variant="h3" tag="span">
          {loading ? 'Uploading...' : title || 'Click or drag file to this area to upload'}
        </Text>
        {!!subTitle && !loading && <Text className={styles.notice}>{subTitle}</Text>}
      </Container>
    </div>
  );
};
