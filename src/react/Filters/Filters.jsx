import React from 'react'
import PropTypes from 'prop-types'
import './Filters.scss'

const Filters = props =>
  <div className={`ui-filters ${props.className}`.trim()}>
    <div className="ui-filters__title text-sans text-sans--title">
      {props.title}
    </div>
    {props.children &&
      <div className="ui-filters__list">
        {props.children}
      </div>
    }
  </div>

Filters.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

Filters.defaultProps = {
  className: '',
  title: 'Filters',
}

export default Filters
