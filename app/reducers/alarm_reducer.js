import { DISABLE_ALARM, TOGGLE_ALARM, UPDATE_SETTING, SAVE_SETTINGS, TOGGLE_SETTINGS } from '../actions/types'


const DEFAULT_STATE = {
  alarmStatus: false,
  checkingTime: false,
  alarming:false,
  timeSet:false,
  apiKey:'',
  currentTime:'5:00',
  alarmTime:'5:00',
  startTime:'5:00',
  normalTrafficTime: '45',
  startLocation:'',
  endLocation:'',
  showSettings: false
}

export default function(state = DEFAULT_STATE, action) {

  switch (action.type) {    
    case TOGGLE_ALARM:
      console.log('toggle_alarm')
      let toggleAlarm = state.alarmStatus == true ? false : true
      return {...state, alarmStatus: toggleAlarm}
    case DISABLE_ALARM: 
    console.log('disable_alarm')
      return {...state , alarmStatus: false, alarming: false, checkingTime: false}
    case UPDATE_SETTING:
    console.log('update_setting')
      let keyValue = action.payload.key

      switch(keyValue){
        case 'apiKey':
          return {...state, apiKey: action.payload.value}
        case 'currentTime':
          return {...state, currentTime: action.payload.value}
        case 'alarmTime':
          return {...state, alarmTime: action.payload.value}
        case 'startTime':
          return {...state, startTime: action.payload.value}
        case 'normalTrafficTime':
          return {...state, normalTrafficTime: action.payload.value}
        case 'startLocation':
          return {...state, startLocation: action.payload.value}
        case 'endLocation':
          return {...state, endLocation: action.payload.value}
        case 'alarming':
          return {...state, alarming: action.payload.value}   
        default: 
          return state
      }
      
    case TOGGLE_SETTINGS:
    console.log('toggle_setting')
      let toggleSettings = state.showSettings == true ? false : true
      return {...state, showSettings: toggleSettings }      
    default:
    
      return state
  }
}
