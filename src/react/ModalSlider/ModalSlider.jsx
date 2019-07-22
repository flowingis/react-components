import React from 'react'
import PropTypes from 'prop-types'
import './ModalSlider.scss'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

const ModalSlider = props =>
  <div className={`ui-modal-slider ${props.className} ${props.show ? 'ui-modal-slider--active' : ''} ${props.desktopMode ? 'ui-modal-slider--centered' : ''} ui-modal-slider--to-${props.position}`}>
    <Icon className="ui-modal-slider__close" name="close" onClick={() => { props.onClose() }}/>
    <div className="ui-modal-slider__window">
      {props.title &&
        <header className="ui-modal-slider__header">
          <div className="ui-modal-slider__title text-sans text-sans--title">
            {props.title}
          </div>
          <Icon className="ui-modal-slider__close-inside" name="close" onClick={() => { props.onClose() }}/>
        </header>
      }
      <div className={`ui-modal-slider__contents ${props.contentOnly ? 'ui-modal-slider__contents--clean' : ''} ${props.title ? 'ui-modal-slider__contents--close-outside' : ''}`}>
        {!props.title &&
          <Icon className="ui-modal-slider__close-inside" name="close" onClick={() => { props.onClose() }}/>
        }
        {props.children}
      </div>
      {props.onConfirm &&
        <footer className="ui-modal-slider__footer grid">
          <Button action="cancel" onClick={() => { props.onClose() }}>
            Cancel
          </Button>
          <Button action="confirm" onClick={() => { props.onConfirm() }}>
            Confirm
          </Button>
        </footer>
      }
    </div>
  </div>

ModalSlider.propTypes = {
  className: PropTypes.string,
  contentOnly: PropTypes.bool,
  desktopMode: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  position: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string,
}

ModalSlider.defaultProps = {
  className: '',
  contentOnly: false,
  desktopMode: false,
  onClose: () => {},
  onConfirm: null,
  position: 'right',
  show: true,
  title: '',
}

export default ModalSlider
