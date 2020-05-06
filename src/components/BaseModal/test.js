import React from 'react';
import renderer from 'react-test-renderer';
import { BaseModal } from './index';

jest.mock('react-dom', () => ({
  createPortal: node => node
}));

const action = () => null;

describe('BaseModal', () => {
  it('renders closed', () => {
    const tree = renderer.create(
      <BaseModal visible={false} onClose={action}>Modal content</BaseModal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders opened', () => {
    const tree = renderer.create(
      <BaseModal visible onClose={action}>Modal content</BaseModal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});