import React, { Fragment } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Card, CardHeader, CardTitle, CardBody } from '@cwds/components'
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

  console.log(value.beatles)
  if (value.beatles.length === 4) {
    errors.beatles = 'You can not choose them all!'
  }

  return errors
}

// function validateEmail(value) {
//   let error
//   if (!value) {
//     error = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address'
//   }
//   return error
// }

// function validateUsername(value) {
//   let error
//   if (value === 'admin') {
//     error = 'Nice try!'
//   }
//   return error
// }

const CheckboxBankValidationExample = () => (
  <Card>
    <CardHeader>
      <CardTitle>With Validation</CardTitle>
    </CardHeader>
    <CardBody>
      <Formik
        initialValues={{ beatles: [] }}
        onSubmit={values => console.log(values)}
        validate={validateBeatles}
      >
        {({ errors, touched, isValidating, values }) => {
          return (
            <Fieldset>
              <Legend>Favorite Beatle</Legend>
              {errors.beatles && touched.beatles && <div>{errors.beatles}</div>}
              {OPTIONS_BEATLES.map(({ label, value }, i) => (
                <Field key={value} type="checkbox" name={`beatles[${i}]`} />
                // <CheckboxControl
                //   key={value}
                //   id={`beatles__${label}`}
                //   name="beatles"
                //   label={label}
                //   value={value}
                //   checked={values.beatles.includes(value)}
                //   onChange={e => {
                //     if (e.target.checked) push(value)
                //     else {
                //       const idx = values.beatles.indexOf(value)
                //       remove(idx)
                //     }
                //   }}
                // />
              ))}
            </Fieldset>

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
