import React from 'react';
import renderer from 'react-test-renderer';
import { Markdown } from './index';

describe('Markdown', () => {
  it('renders code inline', () => {
    const tree = renderer.create(<Markdown text='`Code line`' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders code block', () => {
    const md =
`\`\`\`
Code block
\`\`\``;

    const tree = renderer.create(<Markdown text={md} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders mixed content', () => {
    const instruction = `
## Connect to Tarantool Cartridge using [python client](https://github.com/tarantool/tarantool-python)

First, **install** *tarantool* package using *pip3*:

\`\`\`bash
pip3 install tarantool
\`\`\`

Create a file example.py with the code to get started:

\`\`\`python
from tarantool import Connection
c = Connection(
    "try-cartridge.tarantool.io", 
    10300, 
    user='admin', 
    password='npngatmwsf'
)
result = c.insert("examples", (333, 'Value', 'Value'))
space = c.space("examples")
results = space.select(333)
print(results)
\`\`\`

Run the script

\`\`\`bash
python3 example.py
\`\`\`
`;

    const tree = renderer.create(<Markdown text={instruction} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
