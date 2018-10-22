import React from 'react';
import cn from 'classnames';
import { Card, Utils } from '@cwds/components';
// const variables = require('@cwds/core/variables.json');
// console.log(variables);

const CONTEXT = Utils.CONTEXT;

export default () => (
  <Card>
    {Object.keys(CONTEXT).map((key, i) => (
      <div
        key={CONTEXT[key]}
        className={cn('d-flex justify-content-between align-items-center', {
          'mt-2': i !== 0,
        })}
      >
        <div
          key={CONTEXT[key]}
          className={`bg-${CONTEXT[key]}`}
          style={{
            width: '2rem',
            height: '2rem',
            border: '1px solid #dfdfdf',
          }}
        >
          &nbsp;
        </div>
        <div className="d-flex align-items-center">{CONTEXT[key]}</div>
        <div>FOOOOO</div>
      </div>
    ))}
  </Card>
);
