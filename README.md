# Tarantool UI Components Kit

It's UI components set for Tarantool's interfaces. Strongly recommended to use in every UI module.

## Usage

Install package into your project:

```
npm i @tarantool.io/ui-kit
```

Import components and whatever from ui-kit in code:

```js
import { Button } from '@tarantool.io/ui-kit';

...

return (
  <Button intent='primary' text='Tarantool' />
);
```

## Styleguide

Components list and usage recipes on https://tarantool.github.io/front-ui-kit/.

Use `npm run build` to build or `npm start` to run development server with your local styleguide. 
