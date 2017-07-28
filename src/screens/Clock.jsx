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
                <div className="toolbar"><Link to="/edit">Edit</Link></div>
                <div className="clock"><span>11</span>:<span>23</span></div>
                <div className="message">Response: </div>
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
