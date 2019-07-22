import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Actions.scss'
import Switch from '../Switch/Switch'

const Actions = props => {
  const [expanded, toggleCheckbox] = useState(true)

  return (
    <div className={`ui-actions ${props.className} ${props.show ? 'ui-actions--active' : ''} ${expanded ? 'ui-actions--expanded' : ''}`.trim()}>
      <header className="ui-actions__header">
        <div className="ui-actions__title">
          {props.title}
        </div>
        <Switch className="ui-actions__switch" onChange={toggleCheckbox} isChecked={expanded}>
          {props.label}
        </Switch>
      </header>
      {props.children &&
        <div className="ui-actions__container">
          <div className="ui-actions__list">
            {props.children}
          </div>
        </div>
      }
    </div>
  )
}

Actions.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
}

Actions.defaultProps = {
  className: '',
  show: false,
  label: 'Espandi azioni disponibili',
  title: 'Azioni disponibili',
}

export default Actions
