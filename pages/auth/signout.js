import React, { Component } from 'react'
import Router from 'next/router'

export default class signout extends Component {
  componentDidMount() {
    localStorage.removeItem('jongburn-auth')
    Router.replace('/auth/signin')
  }

  componentDidUpdate() {
    localStorage.removeItem('jongburn-auth')
    Router.replace('/auth/signin')
  }

  render() {
    return (
      <div />
    )
  }
}
