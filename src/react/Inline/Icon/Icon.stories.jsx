import React from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import Page from '../../Page/Page'
import material from './IconDictionary'

import colors from '../../../scss/data/colors.json'

const ExampleIcon = props => <div style={{ textAlign: 'center' }}>
  <div>
    <Icon {...props} />
  </div>
  <code>{props.name}</code>
</div>

ExampleIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

const ExampleIconColor = props =>
  Object.entries(colors.palette.tones).map(([tone, toneValue]) =>
    <div style={{ textAlign: 'center' }}>
      <div>
        <Icon className={`color-${props.tint}-${tone}`}/>
      </div>
      <code>color-{props.tint}-{tone}</code>
    </div>
  )

ExampleIconColor.propTypes = {
  tint: PropTypes.string,
}

const paletteDictionary = Object.entries(colors.palette.colors).map(([tintName, tintValue]) =>
  <ExampleIconColor tint={tintName}/>
)

const iconDictionary = Object.entries(material).map(([key, value]) =>
  <ExampleIcon key={key} name={key}/>
)

storiesOf('Inline/Icon', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Default', () => <Icon name='sendToMachine'/>)
  .add('Small', () => <Icon name='sendToMachine' size='small'/>)
  .add('Missing icon', () => <Icon name='expired'/>)
  .add('Icon dictionary', () =>
    <div className='grid' style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {iconDictionary}
    </div>
  )
  .add('Palette dictionary', () =>
    <div className='grid' style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {paletteDictionary}
    </div>
  )
