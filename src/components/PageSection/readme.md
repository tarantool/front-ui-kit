```js
import { Button, PageSection } from '@tarantool.io/ui-kit';

<div>
  <PageSection
    title='First section'
    topRightControls={[
      <Button
        text='Configure selected'
      />
    ]}
    subTitle={
      <React.Fragment>
        <b>10</b>
        {` Unconfigured servers`}
      </React.Fragment>
    }
  >
    Section content
  </PageSection>

  <PageSection
    title='Second section'
    topRightControls={[
      <Button
        text='Configure selected'
      />
    ]}
    subTitle={
      <React.Fragment>
        <b>10</b>
        {` Unconfigured servers`}
      </React.Fragment>
    }
  >
    Section content
  </PageSection>
</div>
```
