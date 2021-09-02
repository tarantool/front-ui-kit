// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { IconHelperClose } from '../IconHelper';
import { Text } from '../Text';
import { type BaseModalProps, BaseModal, styles as baseStyles } from '../BaseModal';

import { ModalBody } from './components/ModalBody';
import { ModalFooter } from './components/ModalFooter';

const styles = {
  modal: css`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 0 auto auto;
    overflow: hidden;
  `,
  fit: css`
    flex-shrink: 1;
    height: calc(100vh - 80px);
  `,
  title: css`
    flex-shrink: 0;
    padding-right: 24px;
    padding-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  closeIcon: css`
    position: absolute;
    top: 30px;
    right: 30px;
  `,
  children: css`
    flex-grow: 1;
  `,
  childrenThin: css`
    padding-left: 0;
    padding-right: 0;
  `,
};

export type ModalProps = BaseModalProps & {
  footerContent?: React.Node,
  footerControls?: React.Node[],
  title: string,
  loading?: ?boolean,
  onSubmit?: (e: Event) => ?boolean,
  fit?: boolean,
  thinBorders?: boolean,
};

/**
 * @deprecated
 *
 * For backward compatibility.
 * Use Modal.Body and Modal.Footer instead PopupBody and PopupFooter.
 */
export { ModalBody as PopupBody, ModalFooter as PopupFooter };

export class Modal extends BaseModal<ModalProps> {
  static Body = ModalBody;
  static Footer = ModalFooter;

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
      thinBorders,
      wide,
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
              [baseStyles.wide]: wide,
            },
            className
          )}
          ref={this.modalRef}
          tabIndex={0}
          onKeyDown={this.handleEscapePress}
          onSubmit={onSubmit}
        >
          <Text className={styles.title} variant="h2">
            {title}
          </Text>
          {onClose && <IconHelperClose className={styles.closeIcon} onClick={onClose} />}
          <div className={cx(styles.children, { [styles.childrenThin]: thinBorders })}>
            {loading ? 'Loading' : children}
          </div>
          {(footerContent || footerControls) && <Modal.Footer controls={footerControls}>{footerContent}</Modal.Footer>}
          <div className={baseStyles.focusClosureControl} onFocus={this.focusFirstInteractiveElement} tabIndex={0} />
        </Component>
      </div>
    );
  }
}
