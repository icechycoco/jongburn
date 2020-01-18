import React, { Component } from 'react'
import { Calendar } from 'antd'

export default class Schedule extends Component {
  render() {
    return (
      <div>
        <h2>กำหนดการวันเผา</h2>
        <Calendar />
      </div>
    )
  }
}
