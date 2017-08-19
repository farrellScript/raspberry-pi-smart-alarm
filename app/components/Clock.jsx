import React from 'react'
import axios from 'axios'
import moment from 'moment'
import Sound from 'react-sound';
import { connect } from 'react-redux'
import { disableAlarm, toggleAlarm, toggleSettings, updateSetting } from '../actions'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this._disableAlarm = this._disableAlarm.bind(this)
        this._toggleAlarm = this._toggleAlarm.bind(this)
        this._checkTraffic = this._checkTraffic.bind(this)
        this._toggleSettings = this._toggleSettings.bind(this)
        this.timeout = setInterval(()=>{
            const theNewTime = moment(this.props.alarm.currentTime,'HH:mm').add(1, 'm').format("HH:mm")
            this.props.dispatch(updateSetting('currentTime',theNewTime))
        },60000)
    }
    _disableAlarm(e){
        e.preventDefault()
        this.props.dispatch(disableAlarm())
    }
    _toggleAlarm(e){
        e.preventDefault()
        if(this.props.alarm.alarmStatus == false){
            this._checkTraffic()
        }
        this.props.dispatch(toggleAlarm())
    }
    _toggleSettings(e){
        e.preventDefault()
        this.props.dispatch(toggleSettings())
    }
    _checkTraffic(){
        this.trafficTimeout = setInterval(()=>{
            console.log('traffic timeout on')
            // check to see if the current time is later than the time when we should start checking traffic
            if(moment(this.props.alarm.currentTime,'HH:mm').format('X') > moment(this.props.alarm.startTime,'HH:mm').format('X')){
                // If it's time to start checking for traffic
                // make a get request to the google maps api
                // using the data stored in memory
                const normalTime = this.props.alarm.normalTrafficTime
                const key = this.props.alarm.apiKey
                const start = encodeURI(this.props.alarm.startLocation)
                const end = encodeURI(this.props.alarm.endLocation)
                const url = "https://maps.googleapis.com/maps/api/directions/json?origin="+start+"&destination="+end+"&key="+key
                axios.get(url)
                    .then((response) => {
                        const trafficTime = response.data.routes[0].legs[0].duration.value
                        if (
                            (moment(this.props.alarm.currentTime,'HH:mm').format('X') < moment(this.props.alarm.alarmTime,'HH:mm').format('X'))&&
                            (trafficTime >= normalTime*60)&&
                            (moment(this.props.alarm.currentTime,'HH:mm').format('X') > moment(this.props.alarm.alarmTime,'HH:mm').subtract(407,'seconds').format('X'))
                        ){
                            // The amount of traffic that is predicted is greater than the usual ammount
                            // and waking up later than this time will cause you to be late
                            console.log('case 1')
                            this.props.dispatch(updateSetting('alarming',true))
                        } else if (moment(this.props.alarm.currentTime,'HH:mm').format('X') == moment(this.props.alarm.alarmTime,'HH:mm').format('X')){
                            // Traffic is not expected to be worse than normal but it's time to wake up
                            console.log('case 2')
                            this.props.dispatch(updateSetting('alarming',true))
                        } else {
                            // It's not time to trigger the alarm yet
                            // Do nothing for now
                        }
                    })
                    .catch((error) => {
                        console.log('error in get request to google',error);
                    })                    
            } 
        },1000*60)    
    }
    componentDidMount(){
        this._checkTraffic()
    }
    componentDidUpdate(){
        if((this.props.alarm.checkingTime === false)&&(this.props.alarm.alarmStatus === true)){
            this.props.dispatch(updateSetting('checkingTime',true))
        }
        if(this.props.alarm.alarmStatus == false){
            clearTimeout(this.trafficTimeout)
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
        clearTimeout(this.trafficTimeout);
    }
    render(){
        const hour = moment(this.props.alarm.currentTime,'HH:mm').format("hh")
        const minute = moment(this.props.alarm.currentTime,'HH:mm').format("mm")
        return (
            <div className="wrapper clock-wrapper">
                <div className={"clock "+(this.props.alarm.alarming == false ? "":"clock--red")}>
                    <div>
                        <span className="hourSide">{hour}</span> 
                        <span className="blink">:</span> 
                        <span className="minuteSide">{minute}</span>
                    </div>
                </div>
                {this.props.alarm.alarming == false ? (
                    <div className="controls">
                        {this.props.alarm.alarmStatus == false ? (
                            <button className="button" onClick={this._toggleAlarm}>Enable Alarm</button>
                        ):(
                            <button className="button" onClick={this._toggleAlarm}>Disable Alarm</button>
                        )}
                        <button className="button" onClick={this._toggleSettings}>Setting</button>    
                    </div>                             
                ) : (
                    <div className="controls">
                        <button className="button button--red" onClick={this._disableAlarm}>Disable Alarm</button>
                        <Sound url="audio/alarmSound.mp3" playStatus="PLAYING" />
                    </div>     
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    alarm: state.alarm
  }
}


export const Unwrapped = Clock
export default connect(mapStateToProps)(Clock)
