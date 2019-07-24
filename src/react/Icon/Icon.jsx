import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Icon.scss'

import dictionary from './IconDictionary'
import palette from './IconPalette'

const Icon = props =>
  <Fragment>
    {props.paletteColor
      ? <i onClick={() => { props.onClick() }} style={{ color: palette[props.paletteColor] }} title={dictionary[props.name] ? '' : 'Warning: property "name" not set'} className={`material-icons icon ${(props.size ? 'icon--' + props.size : '')} ${props.className}`}>{(dictionary[props.name] ? dictionary[props.name] : dictionary.missingIcon)}</i>
      : <i onClick={() => { props.onClick() }} title={dictionary[props.name] ? '' : 'Warning: property "name" not set'} className={`material-icons icon ${(props.size ? 'icon--' + props.size : '')} ${props.className}`}>{(dictionary[props.name] ? dictionary[props.name] : dictionary.missingIcon)}</i>
    }
  </Fragment>

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  paletteColor: PropTypes.string,
  size: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
  name: 'missingIcon',
  paletteColor: '',
  size: '',
}

export default Icon
