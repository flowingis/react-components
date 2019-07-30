import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Page from '../../Page/Page'

import styles from '../Typography.scss'

import H1 from './H1'
import Button from '../../Form/Button/Button'

import TypographicInfos from '../Storybook/TypographicInfos'

const text = 'This is a H1 headline title'
const selector = styles.sansH1Selector

storiesOf('Typography/H1', module)
  .addDecorator(story => <Page>{story()}</Page>)
  .add('Default', () => <H1>{text}</H1>)
  .add('Custom tag', () => <H1 htmlTag='div'>{text}</H1>)
  .add('Avoid wrapper', () => <span className={selector}>Use <code>{selector}</code> CSS class to apply style without use container wrapper</span>)
  .add('Don\'t do this', () => <H1 htmlTag='div'>Don't use it as <Button icon="warning" action="warning">component wrapper</Button> to avoid useless HTML wrappers</H1>)
  .add('Do this', () => <H1>Use it if you have just <b>text nodes</b> or <b>inline components</b> like links, or bold, etc.</H1>)
  .add('Typographic infos', () =>
    <Fragment>
      <H1>{text}</H1>
      <hr/>
      <TypographicInfos
        styles={styles}
        family={'sans'}
        name={'h1'}/>
    </Fragment>
  )
