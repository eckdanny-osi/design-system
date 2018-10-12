# `@cwds/core`

Core for the CWS-CARES Design System.

## Usage

```
yarn add @cwds/core@alpha
```

### CSS/SCSS

Add the global stylesheet to your application

```jsx
import '@cwds/core/dist/styles.css`;
```

or consume the sass

```scss
@include '~cwds/core/scss/styles`
```

### JavaScript

Useful values are `:export`ed so you can make use of them in javascript if you choose:

```jsx
import DS from '@cwds/core/scss/export';

console.log(DS['theme-color-success']);
// "#068347"
```
