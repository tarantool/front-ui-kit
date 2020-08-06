```js
function handleResize(entries) {
    console.log(entries.map(e => `${e.contentRect.width} x ${e.contentRect.height}`));
}
<ResizeSensor onResize={handleResize}>
    <div style={{ width: 200 }}>Some element</div>
</ResizeSensor>

```
