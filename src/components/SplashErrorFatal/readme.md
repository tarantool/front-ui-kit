```js
import { CopyToClipboard, SplashErrorFatal } from "@tarantool.io/ui-kit";

<>
  <SplashErrorFatal
    title='Artificial error'
    description='An error ocurred and your request couldn’t be completed.'
  />

  <SplashErrorFatal
    title='Artificial error'
    description="Failed to fetch"
    details={<pre>{`Error: Network error: Failed to fetch
  at new ApolloError (http://localhost:3000/static/js/bundle.js:36545:24) Very-very-very long string example
  at http://localhost:3000/static/js/bundle.js:38034:32
  at http://localhost:3000/static/js/bundle.js:38455:13
  at Set.forEach (<anonymous>)
  ...`}
      </pre>}
  />

  <SplashErrorFatal
    title="With `children` prop"
    description={"Let's use <CopyToClipboard> component as an example"}
  >
    <CopyToClipboard content="Hello, I`m copied text" size="s">
      Copy to Clipboard
    </CopyToClipboard>
  </SplashErrorFatal>
</>
```
