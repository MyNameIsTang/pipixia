import http from 'utils/fetch'
import { 
  GET_RECOMMEND
} from './actionTypes'

export const getRecommendListSync = list => { 
  return {
    type: GET_RECOMMEND,
    list
  }
}

export const getRecommendListAsync = () => { 
  return async dispatch => { 
    let result = await http.get('/api/recommend')
    dispatch(getRecommendListSync(result))
  }
}