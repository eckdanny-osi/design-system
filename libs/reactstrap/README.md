# `@cwds/reactstrap`

> [reactstrap](https://github.com/reactstrap/reactstrap) components for CWS-CARES.

This library simply _re-exports_ components from [`reactstrap`](https://github.com/reactstrap/reactstrap) and applies a global cssModule.

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle } from "@cwds/reactstrap";

function App() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>I am a card</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          This is a card from cwds reactstrap
        </CardBody>
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kwrl9mqyk5)

You probably mean to consume [`@cwds/components`](https://www.npmjs.com/package/@cwds/components).
