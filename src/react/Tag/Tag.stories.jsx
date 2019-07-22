import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from '../Page/Page'

import palette from '../Icon/IconPalette'
import Tag from './Tag'

const dictionary = Object.entries(palette).map(([key, value]) =>
  <Tag key={key} paletteColor={key}>{key}{key === 'inherit' && ' (default)'}</Tag>
)

storiesOf('Tag', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Default', () => <Tag>Tag name</Tag>)
  .add('Color', () => <Tag paletteColor='yellow3'>Coffee</Tag>)
  .add('Palette dictionary', () =>
    <div className='grid' style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {dictionary}
    </div>
  )
