import React from 'react';
import renderer from 'react-test-renderer';
import { css } from 'emotion';
import { Modal } from './index';
import { Button } from '../Button';
import { Tabbed } from '../Tabbed';
import { PopupBody } from '../PopupBody';
import { PopupFooter } from '../PopupFooter';
import { LabeledInput } from '../LabeledInput';

jest.mock('react-dom', () => ({
  createPortal: node => node
}));

jest.mock(
  '../Scrollbar/index.js',
  () => ({
    Scrollbar: ({ children, className }) => <div className={className}>{children}</div>
  })
);

const sampleText = 'But I must explain to you how all this mistaken idea of denouncing \
pleasure and praising pain was born and I will give you a complete account of the system, \
and expound the actual teachings of the great explorer of the truth, \
the master-builder of human happiness.';

const tabStyles = css`padding: 24px 0 0;`;

const tabs = [
  {
    label: 'Create Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      {sampleText.repeat(10)}
    </PopupBody>
  },
  {
    label: 'Join Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      {sampleText.repeat(40)}
    </PopupBody>
  },
  {
    label: 'Bad example tab',
    content: <PopupBody className={tabStyles}>
      Bad example (without scroll).
      {sampleText.repeat(40)}
    </PopupBody>
  }
];

const action = () => null;

describe('Modal', () => {
  // afterEach(() => {
  //   ReactDOM.createPortal.mockClear()
  // })

  it('renders closed', () => {
    const tree = renderer.create(
      <Modal visible={false} onClose={action}>Modal content</Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders simple modal', () => {
    const tree = renderer.create(
      <Modal
        title='Simple Modal'
        visible
        onClose={action}
      >
        <PopupBody>{sampleText}</PopupBody>
        <PopupFooter
          controls={[
            <Button intent='primary' text='Accept' />,
            <Button text='Decline' />
          ]}
        />
      </Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders modal with large text', () => {
    const tree = renderer.create(
      <Modal
        title='Configure server'
        visible
        onClose={action}
        wide
      >
        <PopupBody>{sampleText.repeat(40)}</PopupBody>
        <PopupFooter
          controls={[
            <Button intent='primary' text='Accept' />,
            <Button text='Decline' />
          ]}
        />
      </Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders modal with tabs', () => {
    const tree = renderer.create(
      <Modal
        title='Configure server'
        visible
        onClose={action}
        wide
        fit
      >
        <Tabbed tabs={tabs} />
        <PopupFooter
          controls={[
            <Button intent='primary' text='Accept' />,
            <Button text='Decline' />
          ]}
        />
      </Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders modal with form', () => {
    const tree = renderer.create(
      <Modal
        title='Configure server'
        visible
        onClose={action}
        onSubmit={() => null}
        footerControls={[
          <Button intent='primary' text='Accept' type='submit' />,
          <Button text='Decline' onClick={action} />
        ]}
      >
        <LabeledInput label='First input' id='first-input' />
      </Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});