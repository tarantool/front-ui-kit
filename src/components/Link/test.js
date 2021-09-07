import React from 'react';
import renderer from 'react-test-renderer';

import { Link } from '../Link';
import { Text } from '../Text';

describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <>
          <Text>
            Are you <Link href="/">here</Link>?
          </Text>
          <Link href="/" variant="p">
            Go there
          </Link>
          <Link href="/" variant="code">
            Go there
          </Link>
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
