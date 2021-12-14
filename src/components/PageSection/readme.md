```jsx
import { Button, PageSection } from '@tarantool.io/ui-kit';

<div>
  <PageSection
    title='First section'
    topRightControls={[
      <Button
        key={0}
        text="Configure selected"
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
    title="Second section"
    topRightControls={[
      <Button
        key={0}
        text="Configure selected"
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
    title="Third section"
    titleCounter={4}
    topRightControls={[
      <Button
        key={0}
        text="Configure selected"
      />
    ]}
  >
    Section content with counter
  </PageSection>
</div>
```
