// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { IconClose } from '../Icon';
import { PopupFooter } from '../PopupFooter';
import { Text } from '../Text';
import { BaseModalProps, BaseModal, styles as baseStyles } from '../BaseModal';

const styles = {
  modal: css`
    padding: 16px;
    margin: 0 auto auto;
  `,
  title: css`
    padding-bottom: 16px;
    padding-right: 24px;
    border-bottom: 1px solid rgba(55, 52, 66, 0.08);
    margin-bottom: 16px;
    padding-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  closeIcon: css`
    position: absolute;
    top: 16px;
    right: 16px;
  `
};

export interface ModalProps extends BaseModalProps {
  footerContent?: React.Node,
  footerControls?: React.Node[],
  title: string,
  loading?:? boolean,
};

export class Modal extends BaseModal<ModalProps> {
  renderModal() {
    const {
      children,
      className,
      footerContent,
      footerControls,
      title,
      onClose,
      loading,
      wide
    } = this.props;

    return (
      <div className={baseStyles.shim({})} onMouseDown={this.handleOutsideClick}>
        <div
          className={cx(
            baseStyles.baseModal,
            styles.modal,
            { [baseStyles.wide]: wide },
            className
          )}
          ref={this.modalRef}
          tabIndex={0}
          onKeyDown={this.handleEscapePress}
        >
          <Text className={styles.title} variant='h2'>{title}</Text>
          {onClose && <IconClose className={styles.closeIcon} onClick={onClose} />}
          <div>
            {loading ? 'Loading' : children}
          </div>
          {(footerContent || footerControls) && (
            <PopupFooter controls={footerControls}>{footerContent}</PopupFooter>
          )}
          <div
            className={baseStyles.focusClosureControl}
            onFocus={this.focusFirstInteractiveElement}
            tabIndex='0'
          />
        </div>
      </div>
    );
  }
}
