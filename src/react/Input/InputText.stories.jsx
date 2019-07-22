import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from '../Page/Page'

import InputText from './InputText'

storiesOf('Form/Input/Text', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Basic usage', () =>
    <InputText label="This is a text field" placeholder="Placeholder"/>
  )
  .add('Icon', () =>
    <InputText icon="email" label="Write your email" placeholder="your@email.com"/>
  )
