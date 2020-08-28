```js
import { CopyToClipboard } from "../CopyToClipboard";

<>
  <SplashError
    title="Page not found"
    description={"Sorry, the page you're looking for cannot be accessed."}
  />

  <SplashError
    title="Network error"
    description="Failed to fetch"
    details={`Error: Network error: Failed to fetch
      at new ApolloError (http://localhost:3000/static/js/bundle.js:36545:24)
      at http://localhost:3000/static/js/bundle.js:38034:32
      at http://localhost:3000/static/js/bundle.js:38455:13
      at Set.forEach (<anonymous>)
      at http://localhost:3000/static/js/bundle.js:38453:24
      at Map.forEach (<anonymous>)
      at QueryManager.broadcastQueries (http://localhost:3000/static/js/bundle.js:38451:18)
      at http://localhost:3000/static/js/bundle.js:37929:27"`}
  />

  <SplashError
    title="With `children` prop"
    description={"Let's use <CopyToClipboard> component as an example"}
  >
    <CopyToClipboard content="Hello, I`m copied text" size="s">
      Copy to Clipboard
    </CopyToClipboard>
  </SplashError>
</>;
```
