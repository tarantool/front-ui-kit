```js
<Markdown text={`
# Header

## Subheader

Usual paragraph with *italic* and **bold** text and [link](https://mail.ru)

Inline \`code\`

\`\`\`
Code block
\`\`\`

\`\`\`js
JS code block
\`\`\`

* Unsorted list
* with bullets
* and cakes
`} />
```

```js

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

<Markdown text={instruction} />
```