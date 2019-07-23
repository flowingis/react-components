import React from 'react'
import useForm from 'react-hook-form'
import PropTypes from 'prop-types'
import Input from './Input'

const InputEmail = props => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' })
  const rules = {
    required: 'Required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  }
  return (
    <Input {...props} errors={errors}>
      <input
        autoComplete={props.autoComplete}
        className="input__field text-sans text-sans--input"
        defaultValue={props.value}
        name={props.name}
        onBlur={handleSubmit(props.onValid)}
        onChange={e => { props.onChange(e.target.value) }}
        placeholder={props.placeholder}
        ref={register(rules)}
        type="text"
      />
    </Input>
  )
}

InputEmail.propTypes = {
  autoComplete: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onValid: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

InputEmail.defaultProps = {
  autoComplete: 'off',
  name: 'email',
  icon: 'email',
  onChange: value => { return value },
  onValid: value => { return value },
  placeholder: 'your@email.com',
  value: '',
}

export default InputEmail
