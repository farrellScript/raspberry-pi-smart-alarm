import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Clock extends React.Component {
    render(){
        
        return (
            <div className="wrapper">
                <div className="clock">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="center"></span>
                </div>
                <div className="controls">
                    <p className="status">Alarm Time: <span>Off</span></p>
                    <button className="button"><a href="#">Enable Alarm</a></button>
                    <button className="button"><Link to="settings">Setting</Link></button>
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
