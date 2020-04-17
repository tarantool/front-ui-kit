import React from 'react';
import renderer from 'react-test-renderer';
import { PopupBody } from './index';

jest.mock(
  '../Scrollbar/index.js',
  () => ({
    Scrollbar: ({ children, className }) => <div className={className}>{children}</div>
  })
);

describe('PopupBody', () => {
  it('renders without scrollbars', () => {
    const tree = renderer.create(
      <PopupBody className='external-class'>
        content
      </PopupBody>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with scrollbars', () => {
    const tree = renderer.create(
      <PopupBody className='external-class' scrollable>
        content
      </PopupBody>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
