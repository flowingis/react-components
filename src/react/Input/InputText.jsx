import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'
import Input from './Input'

const InputText = props =>
  <Input {...props}>
    <input name={props.name} autocomplete={props.autocomplete} onChange={e => props.onChange(e.target.value)} className="ui-input__field text-sans text-sans--input" type="text" defaultValue={props.value} placeholder={props.placeholder}/>
  </Input>

InputText.propTypes = {
  autocomplete: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

InputText.defaultProps = {
  autocomplete: 'off',
  name: 'unassigned',
  onChange: value => { return value },
  placeholder: '',
  value: '',
}

export default InputText
