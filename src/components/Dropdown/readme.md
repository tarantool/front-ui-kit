By default Dropdown show button with '...' icon but you can pass any another component what you want.

```js
<Dropdown
  items={[
    {
      text: 'Item 1',
      color: 'red',
      className: 'exampleClassName',
      onClick: () => null
    },
    {
      text: 'Item 2',
      onClick: () => null
    }
  ]}
/>
```
<!-- ```js
<Dropdown>
  <Dropdown.Item
    text='Delete entity'
    onClick={console.log}
  />
  <Dropdown.Link
    text='Edit entity'
    to='/'
  />
</Dropdown>
``` -->
