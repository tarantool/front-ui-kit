```js
import { IconSuccess, IconTrash } from '../Icon';
const menu = [
                {
                   "selected":false,
                   "expanded":false,
                   "loading":false,
                   "items":[],
                   "icon": <IconSuccess />,
                   "label":"My Test",
                   "path":"/mytest/test",
                   "namespace":"mytest"
                },
                {
                   "selected":false,
                   "expanded":true,
                   "loading":false,
                   "items":[{
                                               "selected":false,
                                               "expanded": false,
                                               "loading":false,
                                               "items":[],
                                               "icon": <IconSuccess />,
                                               "label":"My Test",
                                               "path":"/mytest/test",
                                               "namespace":"mytest"
                                            },
                                            {
                                               "selected":true,
                                               "expanded":false,
                                               "loading":false,
                                               "items":[],
                                               "icon":"",
                                               "label":"Other",
                                               "path":"/other/test",
                                               "namespace":"other"
                                            },
                                            {
                                               "selected":false,
                                               "expanded":false,
                                               "loading":false,
                                               "items":[],
                                               "icon":"",
                                               "label":"Other2",
                                               "path":"/other/test2",
                                               "namespace":"other"
                                            },
                                            {
                                               "selected":false,
                                               "expanded":false,
                                               "loading":false,
                                               "items":[],
                                               "icon": <IconTrash />,
                                               "label":"Other4",
                                               "path":"/other/test3",
                                               "namespace":"other"
                                            }],
                   "icon":"",
                   "label":"Other",
                   "path":"/other/test",
                   "namespace":"other"
                },
                {
                   "selected":false,
                   "expanded":false,
                   "loading":false,
                   "items":[],
                   "icon":"",
                   "label":"Other2",
                   "path":"/other/test2",
                   "namespace":"other"
                },
                {
                   "selected":true,
                   "expanded":false,
                   "loading":false,
                   "items":[],
                   "icon": <IconTrash />,
                   "label":"Other4",
                   "path":"/other/test3",
                   "namespace":"other"
                }
             ]; 

const onMenuItemClick = (path) => console.log(path);
const toggleExpand = (path, expanded) => console.log(path, expanded);

<div style={{ height: '90vh' }}>
  <Menu 
    menu={menu}
    path={'/'}
    onMenuItemClick={onMenuItemClick}
    toggleExpand={toggleExpand}
/>
</div>
```
