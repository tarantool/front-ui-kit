Preferred way to create tooltip is `withTootip` HOC
because `Tooltip` component produces one extra DOM node.

Orange tooltip used just to show, how you can pass your custom styles into tooltip.
In the most cases you should use default styles.

Prop `largePaddings` makes big multiline tooltips looking better.

```js
import { css } from '@emotion/css';
import {
  Button,
  Input,
  Text,
  Tooltip,
  withTooltip
} from '@tarantool.io/ui-kit';

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
  `,
  blueTip: css`
    background-color: orange;
    &::after { border-top-color: orange; }
    &::before { border-bottom-color: orange; }
  `
};

const largeText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero minima voluptate possimus nam vel nemo, blanditiis ut facere quo cum molestias sint aliquam sapiente aut. Inventore, suscipit vitae ut porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

const InputWithTooltip = withTooltip(Input);
const ButtonWithTooltip = withTooltip(Button);
const TextWithTooltip = withTooltip(Text);

<>
  <Text variant='h3'>Examples of withTooltip HOC usage</Text>
  <InputWithTooltip
    tooltipContent='Tooltip content'
    className={styles.toLeft}
    placeholder='withTooltip HOC'
  />
  <ButtonWithTooltip
    tooltipContent={largeText}
    largePadding
    size='l'
    text='withTooltip HOC'
  />
  <TextWithTooltip
    className={styles.toLeft}
    popoverClassName={styles.blueTip}
    tooltipContent={largeText}
    largePadding
  >
    Tooltip on text
  </TextWithTooltip>
  <Text variant='h3'>Examples of Tooltip component usage</Text>
  <div>
    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}
    <Tooltip className={styles.inText} content='Tooltip content' tag='span'>Tooltip on text.</Tooltip>
    {' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
  </div>
  <Tooltip className={styles.toRight} content='Tooltip content'>
    <Input placeholder='Text area' />
  </Tooltip>
</>
```

<!-- TODO: list components which contains tooltip -->
