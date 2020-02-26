```js
import { css } from 'emotion';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tooltip, withTooltip } from './index';

const styles = {
  toRight: css`
    width: 150px;
    margin-left: auto;
  `,
  toLeft: css`
    display: inline-block;
    width: 150px;
    margin-right: auto;
  `,
  inText: css`
    text-decoration: underline;
  `
};

const largeText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero minima voluptate possimus nam vel nemo, blanditiis ut facere quo cum molestias sint aliquam sapiente aut. Inventore, suscipit vitae ut porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

const InputWithTooltip = withTooltip(Input);
const ButtonWithTooltip = withTooltip(Button);

<>
  <div>
    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}
    <Tooltip className={styles.inText} content='Tooltip content' tag='span'>Tooltip on text.</Tooltip>
    {' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
  </div>
  <Tooltip className={styles.toLeft} content={largeText}>
    Tooltip on text
  </Tooltip>
  <Tooltip className={styles.toRight} content={largeText}>
    <Input placeholder='Text area' />
  </Tooltip>
  <InputWithTooltip tooltipContent={largeText} className={styles.toLeft} placeholder='withTooltip HOC' />
  <ButtonWithTooltip tooltipContent={largeText}>withTooltip HOC</ButtonWithTooltip>
</>
```

<!-- TODO: list components which contains tooltip -->
