Universal wrapper component to insert bundled SVG images everywhere.

```js
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  ControlsPanel,
  splashGenericErrorSvg,
  splashSelectFileSvg,
  SVGImage,
  Switcher,
  TarantoolLogoCompact,
  TarantoolLogoFull,
  windowDeadSvg,
  windowNoNetworkSvg,
  windowShockedSvg
} from '@tarantool.io/ui-kit';

const styles = {
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `
};

const [darkBg, setDarkBg] = useState(false);

const toggleBg = () => setDarkBg(!darkBg);

<div className={cx(styles.wrapper, { [styles.bg]: darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleBg} checked={darkBg}>Background</Switcher>
    ]}
  />
  <SVGImage glyph={splashGenericErrorSvg} />
  <SVGImage glyph={splashSelectFileSvg} />
  <SVGImage glyph={TarantoolLogoCompact} />
  <SVGImage glyph={TarantoolLogoFull} />
  <SVGImage glyph={windowDeadSvg} />
  <SVGImage glyph={windowNoNetworkSvg} />
  <SVGImage glyph={windowShockedSvg} />
</div>
```