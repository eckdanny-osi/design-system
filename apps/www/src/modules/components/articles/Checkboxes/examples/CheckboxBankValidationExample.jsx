import React from 'react'
import { Formik, Form, Field } from 'formik'
import cn from 'classnames'
import {
  Select,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from '@cwds/components'
import { Fieldset, Legend, CheckboxControl } from '@cwds/forms'
import { FormGroup, FormFeedback } from '@cwds/reactstrap'
import { CodeBlock } from '@cwds/docs'

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

  if (Object.values(value.beatleConfirm).filter(Boolean).length === 4) {
    errors.beatleConfirm = 'You can not choose them all!'
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
            beatleConfirm: {},
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
            return (
              <div>
                <Field
                  name="favoriteBeatle"
                  render={({ field, form, ...restProps }) => {
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
                <Field
                  name="beatleConfirm"
                  render={({ field, form }) => {
                    return (
                      <FormGroup>
                        <Label>Beatles (Again)</Label>
                        {errors.beatleConfirm && (
                          <FormFeedback valid={false} className="d-block mb-3">
                            {errors.beatleConfirm}
                          </FormFeedback>
                        )}
                        <Select
                          name={field.name}
                          isMulti
                          isClearable
                          options={OPTIONS_BEATLES}
                          defaultValue={OPTIONS_BEATLES.find(
                            d => d.value === field.value
                          )}
                          onChange={(opt, evt) => {
                            const { action, name } = evt
                            // console.log({ opt, evt })
                            switch (action) {
                              case 'select-option':
                                setFieldValue(
                                  name,
                                  opt.reduce(
                                    (acc, d) => ({ ...acc, [d.value]: true }),
                                    {}
                                  )
                                )
                                break
                              case 'remove-value':
                                setFieldValue(
                                  name,
                                  opt.reduce(
                                    (acc, d) => ({ ...acc, [d.value]: true }),
                                    {}
                                  )
                                )
                                break
                              case 'clear':
                                setFieldValue(name, {})
                                break
                              default:
                                break
                            }
                            setFieldTouched(name)
                          }}
                        />
                      </FormGroup>
                    )
                  }}
                />
                <Field
                  name="iceCream"
                  isClearable
                  render={({ field, form, ...props }) => {
                    // console.log({ field, props })
                    const options = [
                      { value: 'chocolate', label: 'Chocolate' },
                      { value: 'strawberry', label: 'Strawberry' },
                      { value: 'vanilla', label: 'Vanilla' },
                    ]
                    return (
                      <FormGroup>
                        <Label>Favorite Ice Cream</Label>
                        <Select
                          name={field.name}
                          {...props}
                          isClearable={true}
                          options={options}
                          defaultValue={options.find(
                            d => d.value === field.value
                          )}
                          onChange={(opt, { action, name }) => {
                            switch (action) {
                              case 'select-option':
                                setFieldValue(name, opt.value)
                                break
                              case 'clear':
                                setFieldValue(name, '')
                                break
                              default:
                                break
                            }
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
                <CodeBlock language="json">
                  {JSON.stringify({ values, errors, touched }, null, 2)}
                </CodeBlock>
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
