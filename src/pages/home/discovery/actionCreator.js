import http from 'utils/fetch'

import {
  GET_FING
} from './actionTypes'

export const getFindListSync = list => { 
  return {
    type: GET_FING,
    list
  }
}


export const getFindListAsync = () => { 
  return async dispatch => { 
    let result = await http.get(`/api/find`)
    dispatch(getFindListSync(result))
  }
}
