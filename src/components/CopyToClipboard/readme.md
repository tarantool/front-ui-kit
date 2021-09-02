```jsx
import { css } from '@emotion/css';
import {
  Button,
  CopyToClipboard,
  Text,
  copyToClipboard,
  withCopyToClipboard
} from '@tarantool.io/ui-kit';

const styles = {
  wrap: css`
    margin: 10px;
  `,
};

const ToClipboardLabel = withCopyToClipboard(Text);
const ToClipboardHTMLLabel = withCopyToClipboard('span');
const ToClipboardButton = withCopyToClipboard(Button);

<>
  <div className={styles.wrap}>
    <CopyToClipboard
      content="Hello, I'm copied text"
      size="s"
      intent="secondary"
    >
      Copy
    </CopyToClipboard>
  </div>
  <div className={styles.wrap}>
    <ToClipboardLabel content="I'm Text with clipboard">
      I'm Text with clipboard
    </ToClipboardLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboardHTMLLabel content="I'm HTML tag with clipboard">
      I'm HTML tag with clipboard
    </ToClipboardHTMLLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboardButton
      content="I'm Button with clipboard"
      text="I'm Button with clipboard"
    />
  </div>
  <div className={styles.wrap}>
    <Button text="I'm copy button without tooltip" onClick={() => copyToClipboard('I\'m copied text')} />
  </div>
  <Text>Examples with custom tooltip messages:</Text>
    <div className={styles.wrap}>
    <CopyToClipboard
      content="Hello, I'm copied text"
      size="s"
      intent="secondary"
      tooltipContentCopied="Not bad"
      tooltipContent="Hit me"
    >
      Copy
    </CopyToClipboard>
  </div>
  <div className={styles.wrap}>
    <ToClipboardLabel
      content="I'm Text with clipboard"
      tooltipContentCopied="Not bad"
      tooltipContent="Hit me"
    >
      I'm Text with clipboard
    </ToClipboardLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboardHTMLLabel
      content="I'm HTML tag with clipboard"
      tooltipContentCopied="Not bad"
      tooltipContent="Hit me"
    >
      I'm HTML tag with clipboard
    </ToClipboardHTMLLabel>
  </div>
  <div className={styles.wrap}>
    <ToClipboardButton
      content="I'm Button with clipboard"
      text="I'm Button with clipboard"
      tooltipContentCopied="Not bad"
      tooltipContent="Hit me"
    />
  </div>
  <div className={styles.wrap}>
    <Button text="I'm copy button without tooltip" onClick={() => copyToClipboard('I\'m copied text')} />
  </div>
</>
```
