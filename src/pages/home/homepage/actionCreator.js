import http from 'utils/fetch'
import { 
  GET_COMMON,
  GET_ATTENTION
} from './actionTypes'

export const getCommonListSync = list => { 
  return {
    type: GET_COMMON,
    list
  }
}

export const getAttentionListSync = list => { 
  return {
    type: GET_ATTENTION,
    list
  }
}


export const getCommonListAsync = ({ type }) => { 
  return async dispatch => { 
    let result = await http.get(`/api/${type}`)
    dispatch(getCommonListSync(result))
  }
}


export const getAttentionListAsync = () => { 
  return async dispatch => { 
    let result = await http.get('/api/attention')
    dispatch(getAttentionListSync(result))
  }
}