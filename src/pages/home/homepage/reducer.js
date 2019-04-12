import { 
  GET_COMMON,
  GET_ATTENTION
} from './actionTypes'

const defaultState = {
  commonList: {},
  attentionList: {},
}

export default (state = defaultState, action) => {  
  switch (action.type) {
    case GET_COMMON:
      return {
        ...state,
        commonList: action.list
      }
    case GET_ATTENTION:
      return {
        ...state,
        attentionList: action.list
      }
    default:
      return state
  }
}