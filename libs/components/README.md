# `@test/components`

> TODO: description

## Installation

```
yarn add @cwds/components
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "@cwds/components";
import "@cwds/core/dist/styles.css";

function App() {
  return (
    <div className="App">
      <Alert className="success">This is an alert message</Alert>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

You can see in this live and interactive demo in sandbox

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v6309qzyyl)
