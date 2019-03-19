import React, { Fragment } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Label, Card, CardHeader, CardTitle, CardBody } from '@cwds/components'
import { Fieldset, Legend, CheckboxControl } from '@cwds/forms'

const OPTIONS_BEATLES = [
  {
    value: '1',
    label: 'John Lennon',
  },
  {
    value: '2',
    label: 'Paul McCartney',
  },
  {
    value: '3',
    label: 'Ringo Starr',
  },
  {
    value: '4',
    label: 'George Harrison',
  },
]

function validateBeatles(value) {
  // let error
  const errors = {}

  if (value.beatle.filter(Boolean).length === 4) {
    errors.beatles = 'You can not choose them all!'
  }

  return errors
}

const CheckboxBankValidationExample = () => (
  <Card>
    <CardHeader>
      <CardTitle>With Validation</CardTitle>
    </CardHeader>
    <CardBody>
      <Formik
        initialValues={{
          beatle: [],
          color: '',
          something: '',
        }}
        onSubmit={values => console.log(values)}
        validate={validateBeatles}
      >
        {({ errors, touched, isValidating, values }) => {
          // console.log(values)
          return (
            <div>
              <Field
                name="beatle"
                render={({ field, form, ...restProps }) => {
                  // const { onChange, onBlur, name, value } = field
                  // console.log('Field#render()', { field })
                  // console.log(errors)
                  return (
                    <Fieldset>
                      <Legend>Favorite Beatle</Legend>
                      {errors.beatles && <div>{errors.beatles}</div>}
                      {OPTIONS_BEATLES.map(({ label, value }, i) => {
                        // console.log({ value, label })
                        return (
                          <CheckboxControl
                            id={`${field.name}__${i}`}
                            key={value}
                            name={`${field.name}[${i}]`}
                            value={value === field.value[i]}
                            onChange={e => {
                              // const { value, name, checked } = e.target
                              // console.log({ name, value, checked })
                              field.onChange(e)
                            }}
                            label={label}
                          />
                        )
                      })}
                    </Fieldset>
                  )
                }}
              />
              <Field
                name="color"
                component="select"
                placeholder="Favorite Color"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <br />
              <Label>Ogres Say</Label>
              <Field
                name="something"
                render={({ field, form, ...props }) => {
                  const { onChange, onBlur, name, value } = field
                  return (
                    <select
                      onChange={onChange}
                      onBlur={onBlur}
                      name={name}
                      value={value}
                      {...props}
                    >
                      <option value="fee">Fee</option>
                      <option value="fi">Fi</option>
                      <option value="fo">Fo</option>
                      <option value="fum">Fum</option>
                      <option value="all">All of the Above</option>
                    </select>
                  )
                }}
              />
              <br />
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>

            // <Fragment>
            //   <Field name="friends[0]" />
            //   <Field name="friends[1]" />
            // </Fragment>
          )
          // console.log('Formkik rendering...')
          // return (
          //   <FieldArray
          //     name="beatles"
          //     render={({ push, remove }) => (
          //       <Fieldset>
          //         <Legend>Favorite Beatle</Legend>
          //         {errors.beatles && touched.beatles && (
          //           <div>{errors.beatles}</div>
          //         )}
          //         {OPTIONS_BEATLES.map(({ label, value }) => (
          //           <CheckboxControl
          //             key={value}
          //             id={`beatles__${label}`}
          //             name="beatles"
          //             label={label}
          //             value={value}
          //             checked={values.beatles.includes(value)}
          //             onChange={e => {
          //               if (e.target.checked) push(value)
          //               else {
          //                 const idx = values.beatles.indexOf(value)
          //                 remove(idx)
          //               }
          //             }}
          //           />
          //         ))}
          //       </Fieldset>
          //     )}
          //   />
          // )
        }}
      </Formik>
    </CardBody>
  </Card>
)

export default CheckboxBankValidationExample
