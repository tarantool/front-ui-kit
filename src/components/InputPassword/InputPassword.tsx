import React, { FC, useState } from 'react';

import { Button } from '../Button';
import { IconEyeClosed, IconEyeOpened } from '../Icon';
import { Input, InputProps } from '../Input';

import { styles } from './InputPassword.styles';

export const InputPassword: FC<InputProps> = (props: InputProps) => {
  const [hidden, setHidden] = useState(false);

  const toggleType = () => setHidden(!hidden);

  const Icon = hidden ? IconEyeOpened : IconEyeClosed;

  return (
    <Input
      type={hidden ? 'text' : 'password'}
      rightIcon={
        <Button className={styles.innerButton} size="xs" intent="plain" onClick={toggleType}>
          <Icon className={styles.icon} />
        </Button>
      }
      {...props}
    />
  );
};
