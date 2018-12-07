# `@cwds/datagrid`

Datagrid is a lightweight, fast and extendable datagrid built for child welfare digital users

## Installation

```
yarn add '@cwds/datagrid'
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
import DataGrid from "@cwds/datagrid";

const columns = [
  { Header: "Model", accessor: "_row", width: 150 },
  { Header: "mpg", accessor: "mpg" },
  { Header: "cyl", accessor: "cyl" },
  { Header: "disp", accessor: "disp" },
  { Header: "hp", accessor: "hp" },
  { Header: "drat", accessor: "drat" },
  { Header: "wt", accessor: "wt" },
  { Header: "qsec", accessor: "qsec" },
  { Header: "vs", accessor: "vs" },
  { Header: "am", accessor: "am" },
  { Header: "gear", accessor: "gear" },
  { Header: "carb", accessor: "carb" }
];

const App = () => (
  <div>
    <DataGrid data={mtcars} columns={columns} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

You can see in this live and interactive demo in sandbox

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xok6v30y3q)
