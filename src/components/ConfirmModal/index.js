// @flow
// TODO: default text styles
import * as React from 'react';
import { Button } from '../Button'
import { Modal, ModalProps } from '../Modal';

interface ConfirmModalProps extends ModalProps {
  onConfirm: Function,
  onCancel: Function,
  confirmText?: string,
}

export const ConfirmModal = (
  {
    onConfirm,
    onCancel,
    confirmText = 'Ok',
    ...props
  }: ConfirmModalProps
) =>
  <Modal
    onClose={onCancel}
    footerControls={[
      <Button intent={'base'} onClick={onCancel}>Cancel</Button>,
      <Button intent={'primary'} onClick={onConfirm}>{confirmText}</Button>
    ]}
    {...props}
  />
