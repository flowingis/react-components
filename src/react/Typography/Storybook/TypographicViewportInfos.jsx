import React from 'react'
import PropTypes from 'prop-types'

import TypographicInfo from './TypographicInfo'

const TypographicViewportInfos = props =>
  <div>
    <b>Viewport {props.viewport}</b>
    <TypographicInfo
      styles={props.styles} family={props.family} name={props.name}
      property='fontSize'
      viewport={props.viewport}
    />
    <TypographicInfo
      styles={props.styles} family={props.family} name={props.name}
      property='fontWeight'
      viewport={props.viewport}
    />
    <TypographicInfo
      styles={props.styles} family={props.family} name={props.name}
      property='lineHeight'
      viewport={props.viewport}
    />
    <TypographicInfo
      styles={props.styles} family={props.family} name={props.name}
      property='textTransform'
      viewport={props.viewport}
    />
  </div>

TypographicViewportInfos.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string,
  styles: PropTypes.obj,
  viewport: PropTypes.string,
}

export default TypographicViewportInfos
