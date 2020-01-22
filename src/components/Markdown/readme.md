```js
<Markdown text={`
# Header

## Subheader

## Header level 3

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

```js
<Markdown text={`
# Hello world

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo **enim ipsam** voluptatem, *quia voluptas* sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat [voluptatem](https://mail.ru). 

## Subtitle

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.

### header 3

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.

* Create file
* Rename file
* Save file
`} />
```
