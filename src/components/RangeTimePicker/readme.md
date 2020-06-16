```js
initialState = { values: null };
const onChange = (date) => setState({ values: date });

<RangeTimePicker onChange={onChange} showSuffixIcon={!state.values} allowClear />
```
