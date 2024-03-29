import React from 'react';
import renderer from 'react-test-renderer';

import { ConfirmModal } from './index';

jest.mock('react-dom', () => ({
  createPortal: (node) => node,
}));

const action = jest.fn();

const CONFIRM_MODAL_CONTENT = 'Removing user John Appleseed';

describe('ConfirmModal renders correctly', () => {
  it('hidden state', () => {
    const tree = renderer
      .create(
        <ConfirmModal title="Please confirm" visible={false} onCancel={action} onConfirm={action} confirmText="Remove">
          {CONFIRM_MODAL_CONTENT}
        </ConfirmModal>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('visible state', () => {
    const tree = renderer
      .create(
        <ConfirmModal title="Please confirm" visible={true} onCancel={action} onConfirm={action} confirmText="Remove">
          {CONFIRM_MODAL_CONTENT}
        </ConfirmModal>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer
      .create(
        <ConfirmModal
          title="Please confirm"
          visible={true}
          onCancel={action}
          onConfirm={action}
          confirmText="Remove"
          confirmPreloader={true}
        >
          {CONFIRM_MODAL_CONTENT}
        </ConfirmModal>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
