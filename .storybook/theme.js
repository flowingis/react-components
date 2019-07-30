import { create } from '@storybook/theming'

export default create({

  base: 'dark',
  colorPrimary: '##b40038',
  colorSecondary: '#0044d8',

  // UI
  appBg: '#000',
  appContentBg: '#fff',
  appBorderColor: '#fff',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ddd',
  textInverseColor: 'green',

  // Toolbar default and active colors
  barTextColor: '#888',
  barSelectedColor: '#888',
  barBg: '#222',

  // Form colors
  inputBg: '#000',
  inputBorder: '#ddd',
  inputTextColor: '#ddd',
  inputBorderRadius: 0,

  brandTitle: 'Flowing storybook',
  brandUrl: 'https://www.flowing.it',
  brandImage: '//www.flowing.it/static/media/logo-flowing_white.b141c072.svg',
})
