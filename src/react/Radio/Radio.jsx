import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'
import Icon from '../Icon/Icon'

const Radio = props =>
  <label className={`ui-radio ${props.className} ${props.icon ? 'ui-radio--custom' : ''}`.trim()}>
    <input
      className="ui-radio__field"
      defaultChecked={props.isChecked}
      name={props.name}
      onChange={e => props.onChange(e.target.value)}
      type="radio"
      value={props.value}
    />
    <Icon paletteColor={props.paletteColor} className="ui-radio__icon" name={`${props.icon ? props.icon : 'formRadioUnchecked'}`}/>
    <Icon paletteColor={props.paletteColor} className="ui-radio__icon" name={`${props.icon ? props.icon : 'formRadioChecked'}`}/>
    <div className="ui-radio__text">
      {props.children}
    </div>
  </label>

Radio.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  paletteColor: PropTypes.string,
  value: PropTypes.string,
}

Radio.defaultProps = {
  className: '',
  icon: '',
  isChecked: false,
  name: 'unassigned',
  onChange: value => { return value },
  paletteColor: '',
  value: '0',
}

export default Radio
