// @flow
// TODO: default text styles
import React from 'react';

import { Button } from '../Button';
import type { ModalProps } from '../Modal';
import { Modal } from '../Modal';

type ConfirmModalProps = ModalProps & {
  onConfirm: Function,
  onCancel: Function,
  confirmText?: string,
  cancelText?: string,
  confirmPreloader?: boolean,
};

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { onConfirm, onCancel, confirmText = 'Ok', confirmPreloader, cancelText = 'Cancel' } = props;
  return (
    <Modal
      {...props}
      onClose={onCancel}
      footerControls={[
        <Button key={0} intent="base" size="l" onClick={onCancel}>
          {cancelText}
        </Button>,
        <Button key={1} autoFocus intent="primary" size="l" loading={confirmPreloader || false} onClick={onConfirm}>
          {confirmText}
        </Button>,
      ]}
    />
  );
};
