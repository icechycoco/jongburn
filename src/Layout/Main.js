import React, { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {
  Row,
  Col,
  Menu,
  Icon,
  Avatar,
  Layout,
  Dropdown,
} from 'antd'
import Logo from '../components/Logo'

const { Header, Content, Sider } = Layout

const UserMenu = () => (
  <Menu>
    <Menu.Item>
      <a href="/auth/signout">
        ลงชื่อออก
      </a>
    </Menu.Item>
  </Menu>
)

const getActiveMenu = (path) => {
  switch (path) {
    case '/reserve/register':
      return '1'
    case '/reserve/schedule':
      return '2'
    case '/reserve/list':
      return '3'
    case '/reserve/monitoring':
      return '4'
    case '/about':
      return '5'
    default:
      return '1'
  }
}

const MainLayout = ({ children, router }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <Header>
        <Row type="flex" justify="space-between">
          <Col>
            <Link href="/">
              <a className="homepage-button">
                <Logo
                  size="small"
                  mode="light"
                />
                <p>JongBurn</p>
              </a>
            </Link>
          </Col>
          <Col>
            <Dropdown overlay={UserMenu}>
              <a href="#">
                <Avatar size="default" icon="user" />
                {' '}
                ผู้ดูแลระบบ
                <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={200}
          style={{ background: '#fff' }}
        >
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            selectedKeys={[getActiveMenu(router.pathname)]}
          >
            <Menu.Item key="1">
              <Link href="/reserve/register">
                <a>
                  <Icon type="form" />
                  <span>ลงทะเบียนวันเผา</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/reserve/schedule">
                <a>
                  <Icon type="calendar" />
                  <span>ปฏิทิน</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/reserve/list">
                <a>
                  <Icon type="book" />
                  <span>รายการลงทะเบียน</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/reserve/monitoring">
                <a>
                  <Icon type="bar-chart" />
                  <span>ประเมินค่าหมอกควัน</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/about">
                <a>
                  <Icon type="message" />
                  <span>เกี่ยวกับเรา</span>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout)
