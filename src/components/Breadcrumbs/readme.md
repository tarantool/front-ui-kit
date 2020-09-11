```js
const breadcrumbs = [{
  title: '@tarantool.io/ui-kit',
  path: '/tarantool'
},
{
  title: 'UI Components',
  path: '/section-ui-components'
},
{
  title: 'Breadcrumb',
  path: '/breadcrumb'
},
{
  title: 'OverflowList',
  path: '/overflow-list'
},
{
  title: 'ResizeSensor',
  path: '/resize-sensor'
}];
const onLinkClick = (link) => console.log('link', link);
<div>
<Breadcrumbs
  items={breadcrumbs}
  appName={'Project name-2948474770249-999-20299547789'}
  onLinkClick={onLinkClick}
 />

<Breadcrumbs
  items={breadcrumbs}
  appName={'Project name'}
  onLinkClick={onLinkClick}
 />
</div>


```
