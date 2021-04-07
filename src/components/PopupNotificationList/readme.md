```js
import { useState } from 'react';
import { Button, ControlsPanel, PopupNotificationList } from '@tarantool.io/ui-kit';

const greetings = [
  'Hello', 'Hola', 'Прывитанне', 'Chao', 'Aloha', 'Hallo',
  'Гамарджоба', 'Shalom', 'Buenas dias', 'Buon giorno', 'Ave',
  'Guten Tag', 'Ola', 'Dobry den', 'Merhaba', 'Привіт',
  'Paivaa', 'Bonjour', 'Namaste', 'Zdravo'
];

const texts = [
  'Tarantool можно использовать в сценариях OLTP вместо реляционной базы данных, и в этом случае он будет на порядки быстрее.',
  'Tarantool can be used in OLTP scenarios instead of relational databases, and such a solution will work many times faster.'
]

const [notifications, setNotifications] = useState([]);

const closeNotification = (keyToRemove) => setNotifications(
  notifications.filter(({ key }) => (key !== keyToRemove))
);

const addNotification = ({
  details,
  heading = greetings[Math.floor(Math.random() * greetings.length)],
  intent = 'success',
  key = Math.random().toString(),
  text = texts[Math.round(Math.random())]
}) => setNotifications([
  ...notifications,
  {
    details,
    heading,
    intent,
    key,
    text
  }
]);

<>
  <PopupNotificationList
    notifications={notifications.map(
      item => ({
        ...item,
        onClose: () => closeNotification(item.key)
      })
    )}
  />
  <ControlsPanel
    controls={[
      <Button
        text='Add notification'
        onClick={addNotification}
      />,
      <Button
        text='Add error notification'
        onClick={() => addNotification({
          details: <Button text='Details' />,
          heading: 'Error',
          intent: 'error',
          text: 'NetboxError: GraphQL error: "localhost:3303": Connection refused'
        })}
      />
    ]}
    thin
  />
</>
```
