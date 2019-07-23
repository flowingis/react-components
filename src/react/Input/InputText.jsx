import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const InputText = props =>
  <Input {...props}>
    <input name={props.name} autoComplete={props.autoComplete} onChange={e => props.onChange(e.target.value)} className="input__field text-sans text-sans--input" type="text" defaultValue={props.value} placeholder={props.placeholder}/>
  </Input>

InputText.propTypes = {
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

InputText.defaultProps = {
  autoComplete: 'off',
  name: 'unassigned',
  onChange: value => { return value },
  placeholder: '',
  value: '',
}

export default InputText
