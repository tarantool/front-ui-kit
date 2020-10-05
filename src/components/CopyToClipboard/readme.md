```js
import { css } from 'emotion';
import {
  Button,
  Text,
  copyToClipboard,
  withCopyToClipboard
} from '../../index';

const styles = {
  wrap: css`
    margin: 10px;
  `,
};

const ToClipboadLabel = withCopyToClipboard(Text);
const ToClipboadHTMLLabel = withCopyToClipboard('span');
const ToClipboadButton = withCopyToClipboard(Button);

<>
  <div className={styles.wrap}>
    <CopyToClipboard
      content='Hello, I`m copied text'
      size='s'
      intent='secondary'
    >
    Copy
    </CopyToClipboard>
  </div>
  <div className={styles.wrap}>
    <ToClipboadLabel content={'I\'m Text with clipboard'}>
      I'm Text with clipboard
    </ToClipboadLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboadHTMLLabel content={'I\'m HTML tag with clipboard'}>
      I'm HTML tag with clipboard
    </ToClipboadHTMLLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboadButton
      content={'I\'m Button with clipboard'}
      text={'I\'m Button with clipboard'}
    />
  </div>
  <div className={styles.wrap}>
    <Button text={'I\'m copy button without tooltip'} onClick={() => copyToClipboard('I\'m copied text')} />
  </div>
  <Text>Examples with custom tooltip messages:</Text>
    <div className={styles.wrap}>
    <CopyToClipboard
      content='Hello, I`m copied text'
      size='s'
      intent='secondary'
      tooltipContentCopied='Not bad'
      tooltipContent='Hit me'
    >
    Copy
    </CopyToClipboard>
  </div>
  <div className={styles.wrap}>
    <ToClipboadLabel
      content={'I\'m Text with clipboard'}
      tooltipContentCopied='Not bad'
      tooltipContent='Hit me'
    >
      I'm Text with clipboard
    </ToClipboadLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboadHTMLLabel
      content={'I\'m HTML tag with clipboard'}
      tooltipContentCopied='Not bad'
      tooltipContent='Hit me'
    >
      I'm HTML tag with clipboard
    </ToClipboadHTMLLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboadButton
      content={'I\'m Button with clipboard'}
      text={'I\'m Button with clipboard'}
      tooltipContentCopied='Not bad'
      tooltipContent='Hit me'
    />
  </div>
  <div className={styles.wrap}>
    <Button text={'I\'m copy button without tooltip'} onClick={() => copyToClipboard('I\'m copied text')} />
  </div>
</>
```
