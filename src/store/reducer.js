import { combineReducers } from 'redux'

import { reducer as clefairy } from 'components/clefairy/'
import { reducer as homepage } from 'pages/home/homepage/'

export default combineReducers({
  clefairy,
  homepage
})