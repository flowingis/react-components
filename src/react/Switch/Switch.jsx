import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = props =>
  <label className={`ui-switch ${props.className}`}>
    <input
      className="ui-switch__field"
      defaultChecked={props.isChecked}
      name={props.name}
      onChange={e => props.onChange(e.target.checked)}
      type="checkbox"
      defaultValue={props.value}
    />
    <div className="ui-switch__box">
      <div className="ui-switch__dot"></div>
    </div>
    <div className="ui-switch__text">
      {props.children}
    </div>
  </label>

Switch.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

Switch.defaultProps = {
  className: '',
  isChecked: false,
  name: 'unassigned',
  onChange: value => { return value },
  value: '0',
}

export default Switch
