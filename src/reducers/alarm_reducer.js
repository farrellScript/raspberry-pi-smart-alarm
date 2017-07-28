import { SET_TIME } from '../actions/types'
import { fromJS } from 'immutable'

const DEFAULT_STATE = fromJS({
  startLocation:'',
  endLocation: '',
  currentTime: null,
  alarmTime: null
})

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TIME:
      let setTime = state.set(currentTime,action.payload)
      return setTime      
    default:
      return state
  }
}
