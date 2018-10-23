import React from 'react'
import cn from 'classnames'
import { Card, Utils } from '@cwds/components'
import DS from '@cwds/core'

const CONTEXT = Utils.CONTEXT

export default () => {
  return (
    <React.Fragment>
      <pre>
        <code>{JSON.stringify(DS.themeColors, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(DS.grays, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(DS.colors, null, 2)}</code>
      </pre>
    </React.Fragment>
  )
}

export const OLD = () => (
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
)
