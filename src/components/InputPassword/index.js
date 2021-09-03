// @flow
import * as React from 'react';
import { css } from '@emotion/css';
import { IconEyeClosed, IconEyeOpened } from '../Icon';
import { Input, type InputProps } from '../Input';
import { Button } from '../Button';

const styles = {
  innerButton: css`
    padding: 0;
  `,
  icon: css`
    display: block;
  `,
};

type InputPasswordState = {
  hidden: boolean,
};

export class InputPassword extends React.Component<InputProps, InputPasswordState> {
  state = { hidden: true };

  toggleState = () => this.setState(({ hidden }) => ({ hidden: !hidden }));

  render() {
    const { hidden } = this.state;
    const Icon = hidden ? IconEyeOpened : IconEyeClosed;
    return (
      <Input
        {...this.props}
        type={hidden ? 'password' : 'text'}
        rightIcon={
          <Button className={styles.innerButton} size="xs" intent="plain" onClick={this.toggleState}>
            <Icon className={styles.icon} />
          </Button>
        }
      />
    );
  }
}
