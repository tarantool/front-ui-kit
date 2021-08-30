// @flow
// TODO: default text styles
import * as React from 'react';
import { Button } from '../Button'
import { Modal, type ModalProps } from '../Modal';

type ConfirmModalProps = ModalProps & {
  onConfirm: Function,
  onCancel: Function,
  confirmText?: string,
  confirmPreloader?: boolean
}

export const ConfirmModal = (
  props: ConfirmModalProps
) => {
  const {
    onConfirm,
    onCancel,
    confirmText = 'Ok',
    confirmPreloader
  } = props
  return (
    <Modal
      {...props}
      onClose={onCancel}
      footerControls={[
        <Button
          key={0}
          intent='base'
          size='l'
          onClick={onCancel}
        >
          Cancel
        </Button>,
        <Button
          key={1}
          autoFocus
          intent='primary'
          size='l'
          loading={confirmPreloader || false}
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      ]}
    />
  )
}
