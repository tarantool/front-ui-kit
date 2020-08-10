```js
const breadcrumbs = [{
  title: '@tarantool.io/ui-kit',
  link: '/tarantool'
},
{
  title: 'UI Components',
  link: '/section-ui-components'
},
{
  title: 'Breadcrumb',
  link: '/breadcrumb'
},
{
  title: 'OverflowList',
  link: '/overflow-list'
},
{
  title: 'ResizeSensor',
  link: '/resize-sensor'
}];
const onLinkClick = (link) => console.log('link', link);
<div>
<Breadcrumbs
  breadcrumbs={breadcrumbs}
  appName={'Project name-2948474770249-999-20299547789'}
  onLinkClick={onLinkClick}
 />

<Breadcrumbs
  breadcrumbs={breadcrumbs}
  appName={'Project name'}
  onLinkClick={onLinkClick}
 />
</div>


```
