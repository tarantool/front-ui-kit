Used inside `Markdown` and `CodeBlock`. It's not recommended to use directly.

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='jsx'
    text={`export const Alert = ({
  className,
  children,
  type
}) => {
  return (
    <Text
      className={cx(
        styles.alert,
        styles[type],
        className
      )}
      tag='div'
    >
      {children}
    </Text>
  );
}
`}
  />
</pre>
```

### Lua

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='lua'
    text={`local function customer_add(customer_id, fullname)
checks('number', 'string')
return box.space.customer:insert(
  {customer_id, fullname}
)
end`}
  />
</pre>
```

### Python

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='python'
    text={`from tarantool import Connection
c = Connection(
  "try-cartridge.tarantool.io", 
  12032,
  user='admin', 
  password='xhpfduuvbz'
)
result = c.insert("customer", (332, 'John Smith'))
space = c.space("customer")
results = space.select()
print(results)`}
  />
</pre>
```

### PHP

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='php'
    text={`<?php
include_once('vendor/autoload.php');
use Tarantool\\Client\\Client;
use Tarantool\\Client\\Schema\\Criteria;

$client = Client::fromDsn('admin:xhpfduuvbz@try-cartridge.tarantool.io:12032');
$space = $client->getSpace('customer');
$space->insert([222, 'Michael Bryan']);
$result = $space->select(Criteria::index(0));

print_r($result);
?>`}
  />
</pre>
```

### Go

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='go'
    text={`package main

import (
     "fmt"
     "github.com/tarantool/go-tarantool"
)

func main() {
   opts := tarantool.Opts{User: "guest"}
   conn, err := tarantool.Connect("127.0.0.1:3301", opts)
   // conn, err := tarantool.Connect("/path/to/tarantool.socket", opts)
   if err != nil {
       fmt.Println("Connection refused:", err)
   }
   resp, err := conn.Insert(999, []interface{}{99999, "BB"})
   if err != nil {
     fmt.Println("Error", err)
     fmt.Println("Code", resp.Code)
   }
}`}
  />
</pre>
```

### Ruby

```js
import { css } from '@emotion/css';
const blockStyle = css`background-color: #444444;`;

<pre className={blockStyle}>
  <SyntaxHighlight
    language='ruby'
    text={`require 'tarantool16'

db = Tarantool16.new host:'localhost:33013'

# select from '_space' space info about 'test' table
# returns array of tuples as an array
tar.get(272, ['test'], index: 2)

# same, but return tuples as a hashes
tar.get(272, ['test'], index: 2, hash: true)

# same with names
# Names and index descriptions are fetched from tarantool.
# Index is autodetected by key names
tar.get(:_space, {name: 'test'})

# get all spaces
tar.select(:_space, nil, iterator: :all)
tar.select(:_space, nil, iterator: :all, hash: true)

tar.select(:_space, [512], index: 0, iterator: :>=, hash: true)`}
  />
</pre>
```
