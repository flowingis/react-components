import { configure } from '@storybook/react'

import '../node_modules/node-normalize-scss/_normalize.scss'
import '../node_modules/material-design-icons/iconfont/material-icons.css'
import '../node_modules/typeface-roboto/index.css'
import '../src/scss/import.scss'

// automatically import all files ending in *.stories.js
const req = require.context("../src/react", true, /\.stories\.jsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
