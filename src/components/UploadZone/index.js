// @flow
import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { useDropzone } from 'react-dropzone';
import { IconBox, IconSpinner } from '../Icon';
import { Text } from '../Text';
import { colors } from '../../variables';

const styles = {
  wrap: css`
    display: flex;
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
  `
};

const getColor = ({ isDragAccept }) => isDragAccept
  ? colors.intentPrimary
  : colors.intentBase;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${colors.intentBaseActive};
  transition: border .24s ease-in-out;
  outline: none;
  cursor: pointer;
`;

type UploadZoneProps = {
  accept?: string,
  handler?: Function,
  name: string,
  multiple?: boolean,
  className?: string,
  label?: string,
  loading?: bool,
  files?: Array<File>
}

export default function UploadZone(
  {
    accept = '',
    handler,
    name,
    multiple,
    className,
    label,
    loading,
    files
  }: UploadZoneProps
) {
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
    <div className={cx(styles.wrap, className)} ref={ref}>
      <Container
        {...rootProps}
      >
        <input {...getInputProps()} name={name}/>
        <Icon className={styles.icon} />
        <Text variant='h3' tag='span'>
          {loading
            ? 'Uploading...'
            : 'Click or drag file to this area to upload'}
        </Text>
        {!!label && !loading && <Text className={styles.notice}>{label}</Text>}
      </Container>
    </div>
  );
}
