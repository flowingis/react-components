import React from 'react'
import PropTypes from 'prop-types'
import './Tag.scss'
import Icon from '../Icon/Icon'

const Tag = props =>
  <div className={`tag ${props.className}`}>
    <Icon paletteColor={props.paletteColor} name="tag" className="tag__icon"/>
    <div className="tag__text">
      {props.children}
    </div>
  </div>

Tag.propTypes = {
  className: PropTypes.string,
  paletteColor: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
  paletteColor: 'inherit',
}

export default Tag
