import { SET_TIME,TOGGLE_ALARM } from '../actions/types'
import { fromJS } from 'immutable'

const DEFAULT_STATE = fromJS({
  startLocation:'',
  endLocation: '',
  currentTime: null,
  alarmTime: null,
  alarmStatus: false
})

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TIME:
      let setTime = state.set(currentTime,action.payload)
      return setTime    
    case TOGGLE_ALARM:
      let toggleAlarm = state.update('alarmStatus', x => {
        return !x
      })
      return toggleAlarm            
    default:
      return state
  }
}
