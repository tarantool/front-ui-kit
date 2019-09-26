```js
import { css } from 'emotion';

const style = css`height: 300px;`;

const sampleText = 'But I must explain to you how all this mistaken idea of denouncing \
pleasure and praising pain was born and I will give you a complete account of the system, \
and expound the actual teachings of the great explorer of the truth, \
the master-builder of human happiness.';

<Scrollbar className={style}>
  {sampleText.repeat(20)}
</Scrollbar>

```