import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'
import Icon from '../Icon/Icon'
import action from './ButtonDictionary'

const Button = props =>
  <button
    className={`ui-button ${props.className} ${(props.size ? 'ui-button--' + props.size : '')} ${action[props.action]} ${props.disabled ? 'ui-button--disabled' : ''} ${props.collapse ? 'ui-button--collapse' : ''}`.trim()}
    onClick={() => props.onClick()}
    disabled={props.disabled ? 'disabled' : ''}>
    {props.icon && <Icon className='ui-button__icon' name={props.icon}/>}
    <div className='ui-button__text'>{props.children}</div>
  </button>

Button.propTypes = {
  action: PropTypes.string,
  className: PropTypes.string,
  collapse: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
}

Button.defaultProps = {
  action: 'default',
  className: '',
  collapse: false,
  disabled: false,
  icon: '',
  onClick: () => {},
  size: '',
}

export default Button
