import React from 'react';
import renderer from 'react-test-renderer';
import { css } from '@emotion/css';

import { Text, TiledList, TiledListItem } from '../../index';

describe('TiledList', () => {
  it('renders correctly', () => {
    const styles = {
      row: css`
        display: flex;
        justify-content: space-between;
      `,
      wrap: css`
        padding: 40px;
      `,
    };

    const items = [
      { name: 'John', balance: 200 },
      { name: 'Emily', balance: 1500 },
      { name: 'Michael', balance: 500 },
    ];

    const tree = renderer
      .create(
        <>
          <TiledList>
            {items.map((item) => (
              <TiledListItem className={styles.row} key={item.name}>
                <Text>{item.name}</Text>
                <Text variant="h5" tag="span">{`$${item.balance}`}</Text>
              </TiledListItem>
            ))}
          </TiledList>
          <TiledList outer={false}>
            {items.map((item) => (
              <TiledListItem className={styles.row} key={item.name} corners="soft">
                <Text>{item.name}</Text>
                <Text variant="h5" tag="span">{`$${item.balance}`}</Text>
              </TiledListItem>
            ))}
          </TiledList>
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
