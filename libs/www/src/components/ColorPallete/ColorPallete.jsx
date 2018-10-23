import React from 'react'
import cn from 'classnames'
import { Card } from '@cwds/components'

export default ({ colors }) => {
  return (
    <Card className="my-3">
      {Object.keys(colors)
        .map(color => ({ label: color, value: colors[color] }))
        .map(({ label, value }, i) => {
          return (
            <div
              key={value}
              className={cn(
                'd-flex justify-content-between align-items-center',
                {
                  'mt-2': i !== 0,
                }
              )}
            >
              <div
                style={{
                  backgroundColor: value,
                  width: '2rem',
                  height: '2rem',
                  border: '1px solid #dfdfdf',
                }}
              >
                &nbsp;
              </div>
              <div className="d-flex align-items-center">{label}</div>
              <div>
                <code className="text-dark">{value}</code>
              </div>
            </div>
          )
        })}
    </Card>
  )
}
