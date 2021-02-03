# Tarantool UI Components Kit

It's UI components set for Tarantool's interfaces. Strongly recommended to use in every UI module.

[![Build Status](https://travis-ci.com/tarantool/front-ui-kit.svg?branch=master)](https://travis-ci.com/tarantool/front-ui-kit)

## Usage

## Installing

Install package into your project from [npm](https://www.npmjs.com/package/@tarantool.io/ui-kit):

```shell static
npm i @tarantool.io/ui-kit
```

### Fonts

Add Inter font to your project.
You can attach font from Google Fonts using link:

```static
https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap
```

Optionally you can add Source Code Pro to display monotype texts (code, errors, etc.):

```static
https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro:wght@400;500&display=swap
```

### Getting components

Import components and whatever from ui-kit in code:

```js static
import { Button } from '@tarantool.io/ui-kit';

...

return (
  <Button intent='primary' text='Tarantool' />
);
```

### Customizing

You can customize components passing additional css classes to `className` prop.
The `style` property is not recommended to use.

## Styleguide

Components list and usage recipes on https://tarantool.github.io/front-ui-kit/.

Use `npm run build` to build or `npm start` to run development server with your local styleguide. 
