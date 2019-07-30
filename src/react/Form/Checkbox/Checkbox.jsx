import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'
import Icon from '../../Inline/Icon/Icon'

const Checkbox = props =>
  <label className={`checkbox ${props.className} ${props.icon ? 'checkbox--custom' : ''}`.trim()}>
    {!props.sync
      ? <input onChange={e => props.onChange(e.target.checked)} className="checkbox__field" defaultChecked={props.isChecked} type="checkbox" value="1"/>
      : <input onChange={e => props.onChange(e.target.checked)} className="checkbox__field" checked={props.isChecked} type="checkbox" value="1"/>
    }
    {props.icon
      ? <Fragment>
        <Icon paletteColor={props.paletteColor} className="checkbox__icon" name={props.icon}/>
        <Icon paletteColor={props.paletteColor} className="checkbox__icon" name={props.icon}/>
      </Fragment>
      : <Fragment>
        <Icon paletteColor={props.paletteColor} className="checkbox__icon" name="formCheckboxUnchecked"/>
        <Icon paletteColor={props.paletteColor} className="checkbox__icon" name="formCheckboxChecked"/>
      </Fragment>
    }
    <div className="checkbox__text">
      {props.children}
    </div>
  </label>

Checkbox.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  paletteColor: PropTypes.string,
  sync: PropTypes.bool,
}

Checkbox.defaultProps = {
  className: '',
  icon: '',
  isChecked: false,
  onChange: value => { return value },
  paletteColor: '',
  sync: false,
}

export default Checkbox
