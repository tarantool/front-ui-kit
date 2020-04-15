```js
import { CopyToClipboard } from "../CopyToClipboard";

<>
  <SplashErrorNetwork
    description={<>
      Sorry, the page you're looking for cannot be accessed.
      <br />
      Try reloading the page.
    </>}
  />

  <SplashErrorNetwork
    description="Failed to fetch"
    details={<pre>{`Error: Network error: Failed to fetch
  at new ApolloError (http://localhost:3000/static/js/bundle.js:36545:24) Very-very-very long string example
  at http://localhost:3000/static/js/bundle.js:38034:32
  at http://localhost:3000/static/js/bundle.js:38455:13
  at Set.forEach (<anonymous>)
  ...`}
      </pre>}
  />

  <SplashErrorNetwork
    description={"Let's use <CopyToClipboard> component as an example of `children` prop"}
  >
    <CopyToClipboard content="Hello, I`m copied text" size="s" intent="iconic">
      Copy to Clipboard
    </CopyToClipboard>
  </SplashErrorNetwork>
</>
```