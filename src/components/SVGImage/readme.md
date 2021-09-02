Universal wrapper component to insert bundled SVG images everywhere.

```jsx
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
  windowErrorSvg
} from '@tarantool.io/ui-kit';

const styles = {
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `,
};

const [darkBg, setDarkBg] = useState(false);

const toggleBg = () => setDarkBg(value => !value);

<div className={cx(styles.wrapper, { [styles.bg]: darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher key={0} onChange={toggleBg} checked={darkBg}>Background</Switcher>
    ]}
  />
  <SVGImage glyph={splashGenericErrorSvg} />
  <SVGImage glyph={splashSelectFileSvg} />
  <SVGImage glyph={TarantoolLogoCompact} />
  <SVGImage glyph={TarantoolLogoFull} />
  <SVGImage glyph={windowErrorSvg} />
</div>
```