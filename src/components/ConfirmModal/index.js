// @flow
// TODO: default text styles
import * as React from 'react';
import { Button } from '../Button'
import { Modal, type ModalProps } from '../Modal';

type ConfirmModalProps = ModalProps & {
  onConfirm: Function,
  onCancel: Function,
  confirmText?: string,
}

export const ConfirmModal = (
  props: ConfirmModalProps
) => {
  const {
    onConfirm,
    onCancel,
    confirmText = 'Ok'
  } = props
  return (
    <Modal
      {...props}
      onClose={onCancel}
      footerControls={[
        <Button intent={'base'} onClick={onCancel}>Cancel</Button>,
        <Button intent={'primary'} onClick={onConfirm}>{confirmText}</Button>
      ]}
    />
  )
}
