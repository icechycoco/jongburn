import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const AuthLayout = ({ children }) => (
  <Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Content
      style={{
        padding: 24,
        margin: 0,
      }}
    >
      {children}
    </Content>
  </Layout>
)

export default AuthLayout
