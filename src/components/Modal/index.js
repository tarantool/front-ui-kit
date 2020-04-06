// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { IconClose } from '../Icon';
import { PopupFooter } from '../PopupFooter';
import { Text } from '../Text';
import { BaseModalProps, BaseModal, styles as baseStyles } from '../BaseModal';

const styles = {
  modal: css`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0 auto auto;
    overflow: hidden;
  `,
  fit: css`
    flex-shrink: 1;
    height: calc(100vh - 80px);
  `,
  title: css`
    flex-shrink: 0;
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
  `,
  children: css`
    /* flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%; */
  `
};

export interface ModalProps extends BaseModalProps {
  footerContent?: React.Node,
  footerControls?: React.Node[],
  title: string,
  loading?:? boolean,
  onSubmit?: (e: Event) => ?boolean,
  fit?: boolean
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
      onSubmit,
      loading,
      fit,
      wide
    } = this.props;

    const Component = onSubmit ? 'form' : 'div';

    return (
      <div className={baseStyles.shim} onMouseDown={this.handleOutsideClick}>
        <Component
          className={cx(
            baseStyles.baseModal,
            styles.modal,
            {
              [styles.fit]: fit,
              [baseStyles.wide]: wide
            },
            className
          )}
          ref={this.modalRef}
          tabIndex={0}
          onKeyDown={this.handleEscapePress}
          onSubmit={onSubmit}
        >
          <Text className={styles.title} variant='h2'>{title}</Text>
          {onClose && <IconClose className={styles.closeIcon} onClick={onClose} />}
          <div className={styles.children}>
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
        </Component>
      </div>
    );
  }
}
