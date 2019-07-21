import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Icon.scss'
import material from './IconDictionary'
import palette from './IconPalette'

const Icon = props =>
  <Fragment>
    {props.paletteColor && <i {...props} style={{ color: palette[props.paletteColor] }} title={material[props.name] ? '' : 'Warning: property "name" not set'} className={`material-icons icon ${(props.size ? 'icon--' + props.size : '')} ${props.className}`}>{(material[props.name] ? material[props.name] : material.missingIcon)}</i>}
    {!props.paletteColor && <i {...props} title={material[props.name] ? '' : 'Warning: property "name" not set'} className={`material-icons icon ${(props.size ? 'icon--' + props.size : '')} ${props.className}`}>{(material[props.name] ? material[props.name] : material.missingIcon)}</i>}
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
  onClick: () => {},
  size: '',
}

export default Icon
