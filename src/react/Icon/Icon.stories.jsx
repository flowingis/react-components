import React from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import Page from '../Page/Page'
import material from './IconDictionary'
import palette from './IconPalette'

const ExampleIcon = props => <div style={{ textAlign: 'center' }}>
  <div>
    <Icon {...props} />
  </div>
  <code>{props.name}</code>
</div>

const ExampleIconColor = props => <div style={{ textAlign: 'center' }}>
  <div>
    <Icon {...props} />
  </div>
  <code>{(props.paletteColor === 'inherit' ? props.paletteColor + ' (default)' : props.paletteColor)}</code>
</div>

ExampleIconColor.propTypes = {
  paletteColor: PropTypes.string,
}

ExampleIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

const iconDictionary = Object.entries(material).map(([key, value]) =>
  <ExampleIcon key={key} name={key}/>
)

const paletteDictionary = Object.entries(palette).map(([key, value]) =>
  <ExampleIconColor key={key} paletteColor={key} name="warning"/>
)

storiesOf('UI/Icon', module)
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
