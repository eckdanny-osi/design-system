import React, { Fragment } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import cn from 'classnames'
import { Label, Card, CardHeader, CardTitle, CardBody } from '@cwds/components'
import { Fieldset, Legend, CheckboxControl } from '@cwds/forms'
import { Select } from '@cwds/components'
import { FormGroup, FormFeedback } from '@cwds/reactstrap'

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

  if (Object.values(value.favoriteBeatle).filter(Boolean).length === 4) {
    errors.favoriteBeatle = 'You can not choose them all!'
  }

  return errors
}

const CheckboxBankValidationExample = () => (
  <Card>
    <CardHeader>
      <CardTitle>With Validation</CardTitle>
    </CardHeader>
    <CardBody>
      <Form>
        <Formik
          initialValues={{
            favoriteBeatle: {
              '2': true,
            },
            color: '',
            iceCream: 'strawberry',
            favoriteOgreSaying: '',
          }}
          onSubmit={values => console.log(values)}
          validate={validateBeatles}
        >
          {({
            values,
            errors,
            touched,
            isValidating,
            setFieldTouched,
            setFieldValue,
          }) => {
            // console.log(values)
            return (
              <div>
                <Field
                  name="favoriteBeatle"
                  render={({ field, form, ...restProps }) => {
                    const {
                      onChange,
                      onBlur,
                      name: fmkName,
                      value: fmkValue,
                    } = field
                    // console.log('Field#render()', { field })
                    // console.log(errors)
                    return (
                      <Fieldset>
                        <Legend>Favorite Beatle</Legend>
                        <div
                          className={cn('px-3', {
                            'py-3 border border-danger': !!errors.favoriteBeatle,
                          })}
                        >
                          {errors.favoriteBeatle && (
                            <FormFeedback
                              valid={false}
                              className="d-block mb-3"
                            >
                              {errors.favoriteBeatle}
                            </FormFeedback>
                          )}
                          {OPTIONS_BEATLES.map(({ label, value }, i) => {
                            // console.log({ value, label })
                            // debugger
                            // console.log({ fmkName, fmkValue, label, value })
                            return (
                              <CheckboxControl
                                id={`${field.name}__${value}`}
                                key={`${field.name}__${value}`}
                                name={`${field.name}[${value}]`}
                                value={value}
                                defaultChecked={field.value[value]}
                                onChange={e => {
                                  setFieldTouched(`${field.name}`)
                                  field.onChange(e)
                                }}
                                onBlur={e => setFieldTouched(`${field.name}`)}
                                // onChange={e => {
                                //   const { name, value, checked } = e.target
                                //   console.log({ name, value, checked })
                                //   // const { value, name, checked } = e.target
                                //   // console.log({ name, value, checked })
                                //   field.onChange(e)
                                // }}
                                label={label}
                                labelClassName={
                                  !!errors.favoriteBeatle && 'text-danger'
                                }
                              />
                            )
                          })}
                        </div>
                      </Fieldset>
                    )
                  }}
                />
                {/* <Field
                name="color"
                component="select"
                placeholder="Favorite Color"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field> */}
                <Field
                  name="iceCream"
                  render={({ field, form, ...props }) => {
                    // console.log({ field, props })
                    const options = [
                      { value: 'chocolate', label: 'Chocolate' },
                      { value: 'strawberry', label: 'Strawberry' },
                      { value: 'vanilla', label: 'Vanilla' },
                    ]
                    return (
                      <FormGroup>
                        <Label>IceCream</Label>
                        <Select
                          // {...field}
                          name={field.name}
                          // {...props}
                          options={options}
                          defaultValue={options.find(
                            d => d.value === field.value
                          )}
                          // value={options.find(d => d.value === field.value)}
                          onChange={(opt, { name }) => {
                            // console.log({ one, action })
                            // field.onChange(action.name, one.value)
                            setFieldValue(name, opt.value)
                            setFieldTouched(name)
                          }}
                        />
                      </FormGroup>
                    )
                  }}
                />
                <br />
                <FormGroup>
                  <Label>Ogres Say</Label>
                  <Field
                    name="favoriteOgreSaying"
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
                </FormGroup>
                <pre>
                  {JSON.stringify({ values, errors, touched }, null, 2)}
                </pre>
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
      </Form>
    </CardBody>
  </Card>
)

export default CheckboxBankValidationExample
