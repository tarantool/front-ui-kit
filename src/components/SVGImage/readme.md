Universal wrapper component to insert bundled SVG images everywhere.

```js
import { css, cx } from 'emotion';
import { ControlsPanel, Switcher } from '../../index';
import {
  splashGenericErrorSvg,
  splashSelectFileSvg,
  TarantoolLogoCompact,
  TarantoolLogoFull,
  windowDeadSvg,
  windowNoNetworkSvg,
  windowShockedSvg
} from '../../images';

const styles = {
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `
};

initialState = { darkBg: false };

const toggleBg = () => setState({ darkBg: !state.darkBg });

<div className={cx(styles.wrapper, { [styles.bg]: state.darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleBg} checked={state.darkBg}>Background</Switcher>
    ]}
  />
  <SVGImage glyph={splashGenericErrorSvg} />
  <SVGImage glyph={splashSelectFileSvg} />
  <SVGImage glyph={TarantoolLogoFull} />
  <SVGImage glyph={TarantoolLogoCompact} />
  <SVGImage glyph={windowDeadSvg} />
  <SVGImage glyph={windowNoNetworkSvg} />
  <SVGImage glyph={windowShockedSvg} />
</div>
```