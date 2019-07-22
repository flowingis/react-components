import React, { Fragment, useState } from 'react'
import { storiesOf } from '@storybook/react'
import Page from '../Page/Page'

import ModalSlider from './ModalSlider'
import Button from '../Button/Button'

const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const ContextSlider = props => {
  const [show, toggleModal] = useState(false)
  return (
    <Fragment>
      <Button onClick={() => { toggleModal(true) }} icon="test">
        Open modal
      </Button>
      <ModalSlider show={show} onClose={() => { toggleModal(false) }}>
        {description}<br/><br/>{description}<br/><br/>{description}
      </ModalSlider>
    </Fragment>
  )
}

const ContextSliderDesktop = props => {
  const [show, toggleModal] = useState(true)
  return (
    <Fragment>
      <Button onClick={() => { toggleModal(true) }} icon="test">
        Open modal
      </Button>
      <ModalSlider desktopMode={true} show={show} onClose={() => { toggleModal(false) }}>
        {description}<br/><br/>{description}<br/><br/>{description}
      </ModalSlider>
    </Fragment>
  )
}

const ContextSliderFull = props => {
  const [show, toggleModal] = useState(true)
  return (
    <Fragment>
      <Button onClick={() => { toggleModal(true) }} icon="test">
        Open modal
      </Button>
      <ModalSlider title="Are you sure?" desktopMode={true} show={show} onConfirm={() => { toggleModal(false) }} onClose={() => { toggleModal(false) }}>
        {description}<br/><br/>{description}<br/><br/>{description}
      </ModalSlider>
    </Fragment>
  )
}

storiesOf('Modal/ModalSlider', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Default', () =>
    <ModalSlider show={true}>
      {description}<br/><br/>{description}<br/><br/>{description}
    </ModalSlider>
  )
  .add('Clean', () =>
    <ModalSlider show={true} contentOnly={true}>
      {description}<br/><br/>{description}<br/><br/>{description}
    </ModalSlider>
  )
  .add('Title', () =>
    <ModalSlider show={true} title="Confirm this stuff or go away">
      {description}<br/><br/>{description}<br/><br/>{description}
    </ModalSlider>
  )
  .add('Title and clean', () =>
    <ModalSlider show={true} contentOnly={true} title="Confirm this stuff or go away">
      {description}<br/><br/>{description}<br/><br/>{description}
    </ModalSlider>
  )
  .add('Footer', () =>
    <ModalSlider show={true} onConfirm={() => {}}>
      {description}<br/><br/>{description}<br/><br/>{description}
    </ModalSlider>
  )
  .add('Desktop mode', () =>
    <ContextSliderDesktop/>
  )
  .add('Full configured', () =>
    <ContextSliderFull/>
  )
  .add('Open / close', () =>
    <ContextSlider/>
  )
