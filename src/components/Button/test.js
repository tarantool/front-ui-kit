import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './index';
import { IconOk } from '../Icon';

describe('Simple buttons renders correctly', () => {
  it('idle state', () => {
    const tree = renderer.create(
      <>
        <Button size='l' title='Click me right meow!'>Click me</Button>
        <Button size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button size='l' intent='primary'>Click me</Button>
        <Button size='l' intent='primary' disabled>Click me</Button>
        <Button size='l' intent='secondary'>Click me</Button>
        <Button size='l' intent='secondary' disabled>Click me</Button>
        <Button size='l' intent='plain'>Click me</Button>
        <Button size='l' intent='plain' disabled>Click me</Button>
        <Button size='l' intent='dark'>Click me</Button>
        <Button size='l' intent='dark' disabled>Click me</Button>

        <Button title='Click me right meow!'>Click me</Button>
        <Button title='Click me right meow!' disabled>Click me</Button>
        <Button intent='primary'>Click me</Button>
        <Button intent='primary' disabled>Click me</Button>
        <Button intent='secondary'>Click me</Button>
        <Button intent='secondary' disabled>Click me</Button>
        <Button intent='plain'>Click me</Button>
        <Button intent='plain' disabled>Click me</Button>
        <Button intent='dark'>Click me</Button>
        <Button intent='dark' disabled>Click me</Button>

        <Button size='s' title='Click me right meow!'>Click me</Button>
        <Button size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button size='s' intent='primary'>Click me</Button>
        <Button size='s' intent='primary' disabled>Click me</Button>
        <Button size='s' intent='secondary'>Click me</Button>
        <Button size='s' intent='secondary' disabled>Click me</Button>
        <Button size='s' intent='plain'>Click me</Button>
        <Button size='s' intent='plain' disabled>Click me</Button>
        <Button size='s' intent='dark'>Click me</Button>
        <Button size='s' intent='dark' disabled>Click me</Button>

        <Button size='xs' title='Click me right meow!'>Click me</Button>
        <Button size='xs' title='Click me right meow!' disabled>Click me</Button>
        <Button size='xs' intent='primary'>Click me</Button>
        <Button size='xs' intent='primary' disabled>Click me</Button>
        <Button size='xs' intent='secondary'>Click me</Button>
        <Button size='xs' intent='secondary' disabled>Click me</Button>
        <Button size='xs' intent='plain'>Click me</Button>
        <Button size='xs' intent='plain' disabled>Click me</Button>
        <Button size='xs' intent='dark'>Click me</Button>
        <Button size='xs' intent='dark' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer.create(
      <>
        <Button loading size='l' title='Click me right meow!'>Click me</Button>
        <Button loading size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button loading size='l' intent='primary'>Click me</Button>
        <Button loading size='l' intent='primary' disabled>Click me</Button>
        <Button loading size='l' intent='secondary'>Click me</Button>
        <Button loading size='l' intent='secondary' disabled>Click me</Button>
        <Button loading size='l' intent='plain'>Click me</Button>
        <Button loading size='l' intent='plain' disabled>Click me</Button>
        <Button loading size='l' intent='dark'>Click me</Button>
        <Button loading size='l' intent='dark' disabled>Click me</Button>

        <Button loading title='Click me right meow!'>Click me</Button>
        <Button loading title='Click me right meow!' disabled>Click me</Button>
        <Button loading intent='primary'>Click me</Button>
        <Button loading intent='primary' disabled>Click me</Button>
        <Button loading intent='secondary'>Click me</Button>
        <Button loading intent='secondary' disabled>Click me</Button>
        <Button loading intent='plain'>Click me</Button>
        <Button loading intent='plain' disabled>Click me</Button>
        <Button loading intent='dark'>Click me</Button>
        <Button loading intent='dark' disabled>Click me</Button>

        <Button loading size='s' title='Click me right meow!'>Click me</Button>
        <Button loading size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button loading size='s' intent='primary'>Click me</Button>
        <Button loading size='s' intent='primary' disabled>Click me</Button>
        <Button loading size='s' intent='secondary'>Click me</Button>
        <Button loading size='s' intent='secondary' disabled>Click me</Button>
        <Button loading size='s' intent='plain'>Click me</Button>
        <Button loading size='s' intent='plain' disabled>Click me</Button>
        <Button loading size='s' intent='dark'>Click me</Button>
        <Button loading size='s' intent='dark' disabled>Click me</Button>

        <Button loading size='xs' title='Click me right meow!'>Click me</Button>
        <Button loading size='xs' title='Click me right meow!' disabled>Click me</Button>
        <Button loading size='xs' intent='primary'>Click me</Button>
        <Button loading size='xs' intent='primary' disabled>Click me</Button>
        <Button loading size='xs' intent='secondary'>Click me</Button>
        <Button loading size='xs' intent='secondary' disabled>Click me</Button>
        <Button loading size='xs' intent='plain'>Click me</Button>
        <Button loading size='xs' intent='plain' disabled>Click me</Button>
        <Button loading size='xs' intent='dark'>Click me</Button>
        <Button loading size='xs' intent='dark' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Buttons with icons and text renders correctly', () => {
  it('idle state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} size='l' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} size='l' intent='primary'>Click me</Button>
        <Button icon={IconOk} size='l' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} size='l' intent='secondary'>Click me</Button>
        <Button icon={IconOk} size='l' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} size='l' intent='plain'>Click me</Button>
        <Button icon={IconOk} size='l' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} size='l' intent='dark'>Click me</Button>
        <Button icon={IconOk} size='l' intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} intent='primary'>Click me</Button>
        <Button icon={IconOk} intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} intent='secondary'>Click me</Button>
        <Button icon={IconOk} intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} intent='plain'>Click me</Button>
        <Button icon={IconOk} intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} intent='dark'>Click me</Button>
        <Button icon={IconOk} intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} size='s' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} size='s' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} size='s' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} size='s' intent='dark'>Click me</Button>
        <Button icon={IconOk} size='s' intent='dark' disabled>Click me</Button>

        <Button iconRight={IconOk} size='l' title='Click me right meow!'>Click me</Button>
        <Button iconRight={IconOk} size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='primary'>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='primary' disabled>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='secondary'>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='secondary' disabled>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='plain'>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='plain' disabled>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='dark'>Click me</Button>
        <Button iconRight={IconOk} size='l' intent='dark' disabled>Click me</Button>

        <Button iconRight={IconOk} title='Click me right meow!'>Click me</Button>
        <Button iconRight={IconOk} title='Click me right meow!' disabled>Click me</Button>
        <Button iconRight={IconOk} intent='primary'>Click me</Button>
        <Button iconRight={IconOk} intent='primary' disabled>Click me</Button>
        <Button iconRight={IconOk} intent='secondary'>Click me</Button>
        <Button iconRight={IconOk} intent='secondary' disabled>Click me</Button>
        <Button iconRight={IconOk} intent='plain'>Click me</Button>
        <Button iconRight={IconOk} intent='plain' disabled>Click me</Button>
        <Button iconRight={IconOk} intent='dark'>Click me</Button>
        <Button iconRight={IconOk} intent='dark' disabled>Click me</Button>

        <Button iconRight={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button iconRight={IconOk} size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='primary'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='primary' disabled>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='secondary' disabled>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='plain'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='plain' disabled>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='dark'>Click me</Button>
        <Button iconRight={IconOk} size='s' intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} iconRight={IconOk} size='l' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='primary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='secondary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='plain'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='dark'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='l' intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} iconRight={IconOk} title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='primary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='secondary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='plain'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='dark'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} iconRight={IconOk} size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='dark'>Click me</Button>
        <Button icon={IconOk} iconRight={IconOk} size='s' intent='dark' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} loading size='l' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} loading size='l' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='primary'>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='secondary'>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='plain'>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='dark'>Click me</Button>
        <Button icon={IconOk} loading size='l' intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} loading title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} loading title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} loading intent='primary'>Click me</Button>
        <Button icon={IconOk} loading intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} loading intent='secondary'>Click me</Button>
        <Button icon={IconOk} loading intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} loading intent='plain'>Click me</Button>
        <Button icon={IconOk} loading intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} loading intent='dark'>Click me</Button>
        <Button icon={IconOk} loading intent='dark' disabled>Click me</Button>

        <Button icon={IconOk} loading size='s' title='Click me right meow!'>Click me</Button>
        <Button icon={IconOk} loading size='s' title='Click me right meow!' disabled>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='primary'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='primary' disabled>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='secondary'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='secondary' disabled>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='plain'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='plain' disabled>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='dark'>Click me</Button>
        <Button icon={IconOk} loading size='s' intent='dark' disabled>Click me</Button>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Buttons with only icons renders correctly', () => {
  it('idle state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} size='l' title='Click me right meow!' />
        <Button icon={IconOk} size='l' title='Click me right meow!' disabled />
        <Button icon={IconOk} size='l' intent='primary' />
        <Button icon={IconOk} size='l' intent='primary' disabled />
        <Button icon={IconOk} size='l' intent='secondary' />
        <Button icon={IconOk} size='l' intent='secondary' disabled />
        <Button icon={IconOk} size='l' intent='plain' />
        <Button icon={IconOk} size='l' intent='plain' disabled />
        <Button icon={IconOk} size='l' intent='dark' />
        <Button icon={IconOk} size='l' intent='dark' disabled />

        <Button icon={IconOk} title='Click me right meow!' />
        <Button icon={IconOk} title='Click me right meow!' disabled />
        <Button icon={IconOk} intent='primary' />
        <Button icon={IconOk} intent='primary' disabled />
        <Button icon={IconOk} intent='secondary' />
        <Button icon={IconOk} intent='secondary' disabled />
        <Button icon={IconOk} intent='plain' />
        <Button icon={IconOk} intent='plain' disabled />
        <Button icon={IconOk} intent='dark' />
        <Button icon={IconOk} intent='dark' disabled />

        <Button icon={IconOk} size='s' title='Click me right meow!' />
        <Button icon={IconOk} size='s' title='Click me right meow!' disabled />
        <Button icon={IconOk} size='s' intent='primary' />
        <Button icon={IconOk} size='s' intent='primary' disabled />
        <Button icon={IconOk} size='s' intent='secondary' />
        <Button icon={IconOk} size='s' intent='secondary' disabled />
        <Button icon={IconOk} size='s' intent='plain' />
        <Button icon={IconOk} size='s' intent='plain' disabled />
        <Button icon={IconOk} size='s' intent='dark' />
        <Button icon={IconOk} size='s' intent='dark' disabled />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loading state', () => {
    const tree = renderer.create(
      <>
        <Button icon={IconOk} loading size='l' title='Click me right meow!' />
        <Button icon={IconOk} loading size='l' title='Click me right meow!' disabled />
        <Button icon={IconOk} loading size='l' intent='primary' />
        <Button icon={IconOk} loading size='l' intent='primary' disabled />
        <Button icon={IconOk} loading size='l' intent='secondary' />
        <Button icon={IconOk} loading size='l' intent='secondary' disabled />
        <Button icon={IconOk} loading size='l' intent='plain' />
        <Button icon={IconOk} loading size='l' intent='plain' disabled />
        <Button icon={IconOk} loading size='l' intent='dark' />
        <Button icon={IconOk} loading size='l' intent='dark' disabled />

        <Button icon={IconOk} loading title='Click me right meow!' />
        <Button icon={IconOk} loading title='Click me right meow!' disabled />
        <Button icon={IconOk} loading intent='primary' />
        <Button icon={IconOk} loading intent='primary' disabled />
        <Button icon={IconOk} loading intent='secondary' />
        <Button icon={IconOk} loading intent='secondary' disabled />
        <Button icon={IconOk} loading intent='plain' />
        <Button icon={IconOk} loading intent='plain' disabled />
        <Button icon={IconOk} loading intent='dark' />
        <Button icon={IconOk} loading intent='dark' disabled />

        <Button icon={IconOk} loading size='s' title='Click me right meow!' />
        <Button icon={IconOk} loading size='s' title='Click me right meow!' disabled />
        <Button icon={IconOk} loading size='s' intent='primary' />
        <Button icon={IconOk} loading size='s' intent='primary' disabled />
        <Button icon={IconOk} loading size='s' intent='secondary' />
        <Button icon={IconOk} loading size='s' intent='secondary' disabled />
        <Button icon={IconOk} loading size='s' intent='plain' />
        <Button icon={IconOk} loading size='s' intent='plain' disabled />
        <Button icon={IconOk} loading size='s' intent='dark' />
        <Button icon={IconOk} loading size='s' intent='dark' disabled />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
