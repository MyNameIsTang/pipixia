import { combineReducers } from 'redux'

import { reducer as clefairy } from 'components/clefairy/'
import { reducer as homepage } from 'pages/home/homepage/'
import { reducer as discovery } from 'pages/home/discovery/'

export default combineReducers({
  clefairy,
  homepage,
  discovery
})