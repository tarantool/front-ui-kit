// @flow
import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { useDropzone } from 'react-dropzone';
import { IconBox } from '../Icon';
import { TarantoolLogoSpinner } from '../TarantoolLogoSpinner';
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
  preloader: css`
    width: 68px;
    height: 48px;
    margin-bottom: 16px;
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
  title?: string,
  subTitle?: string,
  loading?: bool,
  files?: Array<File>
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
    loading,
    files
  }: UploadZoneProps
) => {
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
        {loading
          ? <TarantoolLogoSpinner className={styles.preloader} />
          : <IconBox className={styles.icon} />}
        <Text variant='h3' tag='span'>
          {loading
            ? 'Uploading...'
            : title || 'Click or drag file to this area to upload'}
        </Text>
        {!!subTitle && !loading && <Text className={styles.notice}>{subTitle}</Text>}
      </Container>
    </div>
  );
}
