import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'
import Icon from '../Icon/Icon'

const Input = props =>
  <label className={`input ${props.className} ${props.icon ? 'input--has-icon' : ''} ${Object.keys(props.errors).length > 0 ? 'input--has-errors' : ''}`.trim()}>
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
    <ul className="input__errors">
      {Object.keys(props.errors).map(name =>
        <li className="input__error">
          <Icon className="input__error-icon" name={props.errors[name].type}/>
          {props.errors[name].message}
        </li>
      )}
    </ul>
  </label>

Input.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.obj,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  errors: {},
  icon: '',
  label: '',
  name: 'unassigned',
  onChange: value => { return value },
  placeholder: '',
  value: '',
}

export default Input
