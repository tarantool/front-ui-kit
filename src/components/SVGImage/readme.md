Universal wrapper component to insert bundled SVG images everywhere.

```js
import {
  splashGenericErrorSvg,
  splashSelectFileSvg,
  windowDeadSvg,
  windowNoNetworkSvg,
  windowShockedSvg
} from '../../images';

<>
  <SVGImage glyph={splashGenericErrorSvg} />
  <SVGImage glyph={splashSelectFileSvg} />
  <SVGImage glyph={windowDeadSvg} />
  <SVGImage glyph={windowNoNetworkSvg} />
  <SVGImage glyph={windowShockedSvg} />
</>
```