import { 
  GET_RECOMMEND
} from './actionTypes'

const defaultState = {
  recommendList: {}
}

export default (state = defaultState, action) => {  
  switch (action.type) {
    case GET_RECOMMEND:
      return {
        ...state,
        recommendList: action.list
      }
    default:
      return state
  }
}