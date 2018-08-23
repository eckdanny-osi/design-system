## CWDS Design System

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Monorepo for CWDS design system

### TODOs

- [ ] globalize the functional css

### Development

I find [`tmux`](https://linux.die.net/man/1/tmux) very handy here because we're often dealing with _many_ processes in this monorepo. The big benefit of a monorepo set up is to have dependencies _linked_ so that you're always seeing early integration feedback when working on the CL. This project uses [`lerna`](https://github.com/lerna/lerna) and [`yarn workspaces`](https://yarnpkg.com/lang/en/docs/workspaces/)

To start up a pipeline for the component library itself (e.g.; watch and build styles, javascript, type definitions, etc.) you can:

`cd packages/cwds-components && yarn build:watch`

To see live changes in a downstream consumer app, there are two candidates:

The `rails_app` package is a `rails5 webpacker` setup that immitates the common setup for CWDS Digital Service teams. One can use the familiar methods to handle that: `rails s` (optionally running `./bin/webpack-dev-server` in a seperate shell) from the `rails_app` directory.

_or_

The `cwds.design.io` package is a static front-end build with `create-react-app`. This is [**the guide site**](https://distracted-dijkstra-a44525.netlify.com/) for the component library. Spin up the devserver with `yarn start` from the `design.cwds.io` package directory.

Both work. My pref is to use the guide site.

**Additionally** (since we're all about fast feedback loops) you can just use [`storybook`](https://storybook.js.org/). From the `cwds-components` package directory, run `yarn storybook`.
