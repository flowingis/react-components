import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TweenMax } from 'gsap'
import './ModalGS.scss'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

const ModalGS = props => {
  let contentsRef = useRef(null)

  useEffect(() => {
    if (props.show) {
      TweenMax.set(contentsRef, { height: 0 })
      TweenMax.to(contentsRef, 1, {
        height: '50vh',
      }).play()
    } else {
      TweenMax.to(contentsRef, 1, {
        height: 0,
      }).play()
    }
  }, [props.show])

  return (
    <div className={`modal modal--active ${props.className} ${props.show ? 'modal--active' : ''} ${props.desktopMode ? 'modal--centered' : ''} modal--to-${props.position}`}>
      <Icon className="modal__close" name="close" onClick={() => { props.onClose() }}/>
      <div className="modal__window">
        {props.title &&
          <header className="modal__header">
            <div className="modal__title text-sans text-sans--title">
              {props.title}
            </div>
            <Icon className="modal__close-inside" name="close" onClick={() => { props.onClose() }}/>
          </header>
        }
        <div ref={el => { contentsRef = el }} className={`modal__contents ${props.contentOnly ? 'modal__contents--clean' : ''} ${props.title ? 'modal__contents--close-outside' : ''}`}>
          {!props.title &&
            <Icon className="modal__close-inside" name="close" onClick={() => { props.onClose() }}/>
          }
          {props.children}
        </div>
        {props.onConfirm &&
          <footer className="modal__footer grid">
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
  )
}

ModalGS.propTypes = {
  className: PropTypes.string,
  contentOnly: PropTypes.bool,
  desktopMode: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  position: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string,
}

ModalGS.defaultProps = {
  className: '',
  contentOnly: false,
  desktopMode: false,
  onClose: () => {},
  onConfirm: null,
  position: 'right',
  show: true,
  title: '',
}

export default ModalGS
