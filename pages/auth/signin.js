import React, { Component } from 'react'
import Router from 'next/router'
import { 
  Row, 
  Input, 
  Form, 
  Card,
  Button } from 'antd'
import Logo from '../../src/components/Logo'

class Signin extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('jongburn-auth', true)
    Router.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div 
        className="signin"
      >
        <Logo />
        <h1>Jong Burn</h1>
        <Card>
          <Form
            onSubmit={this.onSubmit}
          >
            <Input 
              type="email" 
              placeholder="Email" 
              />
            <Input 
              type="password" 
              placeholder="Password" 
            />
            <Row type="flex" justify="center">
              <Button 
                htmlType="submit"
              >
                ลงชื่อเข้าใช้
              </Button>
            </Row>
          </Form>
        </Card>
      </div>
    )
  }
}


export default Signin