import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'
import Input from './Input'

const InputSerial = props =>
  <Input {...props}>
    <input name={props.name} autocomplete={props.autocomplete} onChange={e => props.onChange(e.target.value)} className="input__field text-sans text-sans--input" type="text" defaultValue={props.value} placeholder={props.placeholder}/>
  </Input>

InputSerial.propTypes = {
  autocomplete: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

InputSerial.defaultProps = {
  autocomplete: 'off',
  name: 'unassigned',
  icon: 'serial',
  onChange: value => { return value },
  placeholder: '9203102390',
  value: '',
}

export default InputSerial
