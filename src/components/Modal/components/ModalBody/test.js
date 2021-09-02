import React from 'react';
import renderer from 'react-test-renderer';

import { ModalBody } from '.';

describe('ModalBody', () => {
  it('renders without scrollbars', () => {
    const tree = renderer.create(
      <ModalBody className='external-class'>
        content
      </ModalBody>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with scrollbars', () => {
    const tree = renderer.create(
      <ModalBody className='external-class' scrollable>
        content
      </ModalBody>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
