Use this component to show preloader
while lazy loading entire application page.

Usage example:

```jsx static
import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { SectionPreloader } from '@tarantool.io/ui-kit';

<Router history={tarantool_enterprise_core.history}>
  <Suspense fallback={<SectionPreloader />}>
    <Switch>
      <Route path={projectPath('code')} component={Code} />
      <Route path={projectPath('schema')} component={Schema} />
    </Switch>
  </Suspense>
</Router>
```

Preview:

```jsx
import { css } from 'emotion';
import { SectionPreloader } from '@tarantool.io/ui-kit';

<div className={css`height: 400px;`}>
  <SectionPreloader />
</div>
```
