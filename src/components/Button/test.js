import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './index';
import { IconOk } from '../Icon';

describe('Simple buttons renders correctly', () => {
  it('idle state', () => {
    const tree = renderer.create(
      <>
        <Button title='Click me right meow!'>Click me</Button>
        <Button intent='primary'>Click me</Button>
        <Button intent='secondary'>Click me</Button>
        <Button intent='iconic'>Click me</Button>
        <Button intent='plain'>Click me</Button>
        <Button disabled>Click me</Button>

        <Button size='s' title='Click me right meow!'>Click me</Button>
        <Button size='s' intent='primary'>Click me</Button>
        <Button size='s' intent='secondary'>Click me</Button>
        <Button size='s' intent='iconic'>Click me</Button>
        <Button size='s' intent='plain'>Click me</Button>
        <Button size='s' disabled>Click me</Button>

        <Button size='xs' title='Click me right meow!'>Click me</Button>
        <Button size='xs' intent='primary'>Click me</Button>
        <Button size='xs' intent='secondary'>Click me</Button>
        <Button size='xs' intent='iconic'>Click me</Button>
        <Button size='xs' intent='plain'>Click me</Button>
        <Button size='xs' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer.create(
      <>
        <Button loading title='Click me right meow!'>Click me</Button>
        <Button loading intent='primary'>Click me</Button>
        <Button loading intent='secondary'>Click me</Button>
        <Button loading intent='iconic'>Click me</Button>
        <Button loading intent='plain'>Click me</Button>
        <Button loading disabled>Click me</Button>

        <Button loading size='s' title='Click me right meow!'>Click me</Button>
        <Button loading size='s' intent='primary'>Click me</Button>
        <Button loading size='s' intent='secondary'>Click me</Button>
        <Button loading size='s' intent='iconic'>Click me</Button>
        <Button loading size='s' intent='plain'>Click me</Button>
        <Button loading size='s' disabled>Click me</Button>

        <Button loading size='xs' title='Click me right meow!'>Click me</Button>
        <Button loading size='xs' intent='primary'>Click me</Button>
        <Button loading size='xs' intent='secondary'>Click me</Button>
        <Button loading size='xs' intent='iconic'>Click me</Button>
        <Button loading size='xs' intent='plain'>Click me</Button>
        <Button loading size='xs' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Buttons with icons renders correctly', () => {
  it('idle state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} intent='primary'>Click me</Button>
        <Button icon={IconOk} intent='secondary'>Click me</Button>
        <Button icon={IconOk} intent='iconic'>Click me</Button>
        <Button icon={IconOk} intent='plain'>Click me</Button>
        <Button icon={IconOk} disabled>Click me</Button>

        <Button icon={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} size='s' intent='iconic'>Click me</Button>
        <Button icon={IconOk} size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} size='s' disabled>Click me</Button>

        <Button iconRight={IconOk} title='Click me right meow!'>Click me</Button>
        <Button iconRight={IconOk} intent='primary'>Click me</Button>
        <Button iconRight={IconOk} intent='secondary'>Click me</Button>
        <Button iconRight={IconOk} intent='iconic'>Click me</Button>
        <Button iconRight={IconOk} intent='plain'>Click me</Button>
        <Button iconRight={IconOk} disabled>Click me</Button>

        <Button iconRight={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='primary'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='iconic'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='plain'>Click me</Button>
        <Button iconRight={IconOk} size='s' disabled>Click me</Button>

        <Button icon={IconOk} iconRight={IconOk} title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='primary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='secondary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='iconic'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='plain'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} disabled>Click me</Button>

        <Button icon={IconOk} iconRight={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='iconic'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} loading title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} loading intent='primary'>Click me</Button>
        <Button icon={IconOk} loading intent='secondary'>Click me</Button>
        <Button icon={IconOk} loading intent='iconic'>Click me</Button>
        <Button icon={IconOk} loading intent='plain'>Click me</Button>
        <Button icon={IconOk} loading disabled>Click me</Button>

        <Button icon={IconOk} loading size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='iconic'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} loading size='s' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
