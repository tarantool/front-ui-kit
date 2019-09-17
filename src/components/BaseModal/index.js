// @flow
import * as React from 'react';
import { createRef } from 'react';
import * as ReactDOM from 'react-dom';
import { css, cx } from 'emotion';

export const styles = {
  shim: ({ bg }: { bg?: string}) => css`
    position: fixed;
    z-index: 100; /* TODO: to constants */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    padding: 40px 16px;
    overflow: auto;
    background-color: ${bg ? bg : 'rgba(0, 0, 0, 0.65)'};
    justify-content: center;
    align-items: center;
  `,
  baseModal: css`
    position: relative;
    width: 100%;
    max-width: 600px;
    border-radius: 4px;
    margin: auto;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
    outline: none;
  `,
  focusClosureControl: css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  `,
  wide: css`
    max-width: 1000px;
  `
};

const isNodeOutsideElement = (node: HTMLElement, element: HTMLElement) => !(element.contains(node) || element === node);

export interface BaseModalProps {
  visible?: boolean,
  children?: React.Node,
  className?: string,
  wide?: boolean,
  onClose?: (?MouseEvent) => void,
  bgColor?: string,
}

export class BaseModal<T: BaseModalProps = BaseModalProps> extends React.Component<T> {
  modalRef = createRef<HTMLElement>();

  componentDidMount() {
    if (this.isModalVisible()) {
      this.focusFirstInteractiveElement();
    }
  }

  componentDidUpdate(prevProps: BaseModalProps) {
    if (prevProps.visible === false && this.isModalVisible()) {
      this.focusFirstInteractiveElement();
    }
  }

  render() {
    if (!this.isModalVisible())
      return null;

    const root = document.body;

    if (root) {
      return ReactDOM.createPortal(this.renderModal(), root);
    }

    return null
  }

  renderModal() {
    const {
      children,
      className,
      wide,
      bgColor
    } = this.props;

    return (
      <div className={styles.shim({ bg: bgColor })} onMouseDown={this.handleOutsideClick}>
        <div
          className={cx(
            styles.baseModal,
            { [styles.wide]: wide },
            className
          )}
          ref={this.modalRef}
          tabIndex={0}
          onKeyDown={this.handleEscapePress}
        >
          {children}
          <div
            className={styles.focusClosureControl}
            onFocus={this.focusFirstInteractiveElement}
            tabIndex='0'
          />
        </div>
      </div>
    );
  }

  focusFirstInteractiveElement = () => {
    const modal = this.modalRef.current;
    const firstInteractiveElement = modal && modal.querySelector('a, button, input, select, textarea');

    if (firstInteractiveElement) {
      firstInteractiveElement.focus();
    } else if (modal) {
      modal.focus();
    }
  }

  isModalVisible = (): boolean => {
    const { visible } = this.props;
    return visible !== false;
  }

  handleOutsideClick = (event: MouseEvent) => {
    const modal = this.modalRef.current;

    if (modal && event.target instanceof HTMLElement && isNodeOutsideElement(event.target, modal)) {
      this.props.onClose && this.props.onClose(event);
    }
  };

  handleEscapePress = (e: KeyboardEvent) => {
    if (this.props.onClose && e.keyCode === 27) {
      this.props.onClose();
    }
  }
}
