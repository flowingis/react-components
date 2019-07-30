import React from 'react'
import PropTypes from 'prop-types'
import './TypographicInfos.scss'

import TypographicViewportInfos from './TypographicViewportInfos'

const TypographicInfos = props =>
  <div className="grid typographic-infos">
    <TypographicViewportInfos
      styles={props.styles}
      family={props.family}
      name={props.name}
      viewport='default'
    />
    <TypographicViewportInfos
      styles={props.styles}
      family={props.family}
      name={props.name}
      viewport='mobile'
    />
    <TypographicViewportInfos
      styles={props.styles}
      family={props.family}
      name={props.name}
      viewport='tablet'
    />
    <TypographicViewportInfos
      styles={props.styles}
      family={props.family}
      name={props.name}
      viewport='desktop'
    />
    <TypographicViewportInfos
      styles={props.styles}
      family={props.family}
      name={props.name}
      viewport='large'
    />
  </div>

TypographicInfos.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string,
  styles: PropTypes.obj,
}

export default TypographicInfos
