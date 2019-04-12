import { 
  GET_HINTTOP,
  SET_HIDDENBOOL,
  SET_DISLIKE
} from './actionTypes'

const defaultState = {
  hintTop: null,
  hidden: false,
  disLike: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_HINTTOP:
      return {
        ...state,
        hintTop: action.hintTop
      }
    case SET_HIDDENBOOL:
      return {
        ...state,
        hidden: action.hidden
      }
    case SET_DISLIKE:
      return {
        ...state,
        disLike: action.disLike
      }
    default:
      return state
  }
}


