import { TOGGLE_ALARM, UPDATE_SETTING, SAVE_SETTINGS, TOGGLE_SETTINGS } from '../actions/types'
import { fromJS } from 'immutable'

const DEFAULT_STATE = fromJS({
  alarmStatus: false,
  apiKey:'1',
  currentTime:'',
  alarmTime:'',
  startLocation:'3',
  endLocation:'4',
  showSettings: false
})

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {    
    case TOGGLE_ALARM:
      let toggleAlarm = state.update('alarmStatus', x => {
        return !x
      })
      return toggleAlarm
    case UPDATE_SETTING:
      let updatedSetting = state.set(action.payload.key,action.payload.value)
      return updatedSetting    
    case TOGGLE_SETTINGS:
      let toggleSetting = state.update('showSettings', x => {
        return !x
      })
      return toggleSetting         
    default:
      return state
  }
}
