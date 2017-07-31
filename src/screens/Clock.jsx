import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'
import { toggleAlarm } from '../actions'
import { Link } from 'react-router-dom';

class Clock extends React.Component {
    constructor(props){
        super(props)
        this._toggleAlarm = this._toggleAlarm.bind(this)
    }
    _toggleAlarm(e){
        e.preventDefault()
        this.props.dispatch(toggleAlarm())
    }
    render(){
        return (
            <div className="wrapper">
                <div className="clock">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="center"></span>
                </div>
                <div className="controls">
                    <p className="status">Alarm Time: <span>{this.props.alarm.get('alarmStatus') == false ? "off":"on"}</span></p>
                    <button className="button"><a href="#" onClick={this._toggleAlarm}>Enable Alarm</a></button>
                    <button className="button"><Link to="/settings">Setting</Link></button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    alarm: state.alarm
  }
}

export default connect(mapStateToProps)(Clock)
