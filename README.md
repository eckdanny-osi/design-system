# CWDS Design System

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![slack](https://img.shields.io/badge/chat-slack-53b390.svg?logo=slack)](https://slack.com/app_redirect?channel=C34SC4BMF)

Monorepo for CWDS design system

Note: this is a pre-release branch!

## Consuming the Component Library

🛑 **If want the component library** 🛑

Install from [npm](https://www.npmjs.com/package/@cwds/components):

```sh
yarn add @cwds/components
```

Start using components in your application:

```jsx
import React from 'react'
import { Button } from '@cwds/components'
const App = () => (
  <div>
    <Button>Hello World!</Button>
  </div>
)
```

### How to Use / Relevant files:

System dependencies:

- Node version: > 6.3.1, npm
- yarn version: 1.10.1

## Getting Started

Clone the repository

```sh
git clone https://github.com/ca-cwds/design-system.git && cd $_
yarn
```

To precompile the libs and www do
```sh
yarn build
```

### Development

You have a few options. Select the workflow that most appropriately suits your context:

#### Storybook

> Great for developing components in isolation

To run _Storybook_:

```sh
yarn storybook
```

#### The Guide Site

> This is public docs site and reference implemenation. It runs on CRA@2.x.

To run the _Guide Site_:

```sh
yarn start
```
#### Contirbution guidelines

> Build a component under `libs/components/src` and export the component through index.js as

```js
export { Example } from './Example'
```

> For PO or designers to review the changes host it on storybook by adding Example story to components in modules under apps/www

```js
import Example from '!babel-loader!@mdx-js/loader!./modules/Example/Example.mdx'

const routes = {
  title: 'Component Library',
  path: '/components',
  component: Components,
  children: [
    {
      title: 'Example',
      path: '/Example',
      component: Example,
    },
  ]
}
```


#### rails_app

> This is a good integration check for our digital service teams that all utilize this stack.

To run the _rails app_:

first start the webpack dev server:

```sh
cd libs/rails_app
./bin/webpack-dev-server
```

> You may find it helpful to have two processes running for debugging via `pry` or for whatever. We suggest using multiple terminals/panes or using terminal multiplexer like `tmux`.

then start the rails server:

```sh
cd libs/rails_app
./bin/rails s
```

## Questions

If you have any questions regarding the contents of this repository, please email the Office of Systems Integration at <FOSS@osi.ca.gov>.
