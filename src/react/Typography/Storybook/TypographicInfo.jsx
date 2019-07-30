import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../Paragraph/Paragraph'

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const dashCase = s => {
  return s.split(/(?=[A-Z])/).join('-').toLowerCase()
}

const TypographicInfo = props => {
  const propName = `${props.family}${capitalize(props.name)}${capitalize(props.viewport)}${capitalize(props.property)}`
  const propValue = props.styles[propName]
  return (
    <Fragment>
      {propValue &&
        <div>
          <code>
            {dashCase(props.property)}: {propValue}
          </code>
        </div>
      }
    </Fragment>
  )
}

TypographicInfo.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string,
  property: PropTypes.string,
  styles: PropTypes.obj,
  viewport: PropTypes.string,
}

TypographicInfo.defaultProps = {
  family: 'sans',
  name: 'h1',
  property: 'fontSize',
  viewport: 'default',
}

export default TypographicInfo
