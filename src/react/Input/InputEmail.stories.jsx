import React, { Fragment, useState } from 'react'
import { storiesOf } from '@storybook/react'
import Page from '../Page/Page'

import InputEmail from './InputEmail'

const Form = () => {
  const [fieldValue, setValue] = useState(null)
  const [fieldValid, setValidity] = useState(false)
  return (
    <Fragment>
      <InputEmail onValid={ value => { setValue(value.email) }} />
      {fieldValue && <div>Field value: {fieldValue}</div>}
    </Fragment>
  )
}

storiesOf('Form/Input/Email', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Default', () =>
    <Form />
  )
