import {
  GET_FING
} from './actionTypes'

const defaultState = {
  findList: {}
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case GET_FING:
      return {
        ...state,
        findList: action.list
      }
    default:
      return state
  }
}
