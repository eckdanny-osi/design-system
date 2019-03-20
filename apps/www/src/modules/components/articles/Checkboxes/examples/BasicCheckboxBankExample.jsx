import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody, FormGroup, Label } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { CheckboxBank } from '@cwds/forms'
import get from 'lodash.get'
import partial from 'lodash.partial'

import { toppings } from './toppings-data'

const initialValues = {
  toppings: ['3', '2', '5', '9'],
}

const BasicCheckboxBankExample = ({ noDebug }) => {
  return (
    <Formik initialValues={initialValues}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <Card>
          <CardBody>
            <FormGroup>
              <Label>Toppings</Label>
              <CheckboxBank
                options={toppings}
                value={get(values, 'toppings')}
                onChange={partial(setFieldValue, 'toppings')}
                onBlur={partial(setFieldTouched, 'toppings')}
              />
            </FormGroup>
            {!noDebug && (
              <Fragment>
                <hr />
                <CodeBlock language="json" className="mb-0">
                  {JSON.stringify(values, null, 2)}
                </CodeBlock>
              </Fragment>
            )}
          </CardBody>
        </Card>
      )}
    </Formik>
  )
}

export default BasicCheckboxBankExample
