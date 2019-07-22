import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'
import Icon from '../Icon/Icon'

const Input = props =>
  <label className={`input ${props.className} ${props.icon ? 'input--has-icon' : ''}`.trim()}>
    {props.label &&
      <div className="input__label text-sans text-sans--label">
        {props.label}
      </div>
    }
    {props.icon &&
      <div className="input__icon-area">
        <Icon className="input__icon" name={props.icon}/>
      </div>
    }
    {props.children}
  </label>

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  icon: '',
  label: '',
  name: 'unassigned',
  onChange: value => { return value },
  placeholder: '',
  value: '',
}

export default Input
