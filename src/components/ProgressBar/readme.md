ProgressBar accepts values between 0 and 100.
```js
import { css } from 'emotion';

const style = css`
  width: 300px;
  margin-bottom: 10px;
`;

<>
  <ProgressBar className={style} percents={0} />
  <ProgressBar className={style} percents={25} />
  <ProgressBar className={style} percents={40} />
  <ProgressBar className={style} percents={60} />
  <ProgressBar className={style} percents={80} />
  <ProgressBar className={style} percents={100} />
</>
```
