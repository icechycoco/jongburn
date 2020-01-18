import React from 'react'
import Router from 'next/router'
import {
  DatePicker,
  Button,
  Input,
  Form,
  Row,
  Col,
} from 'antd'

const RegistrationForm = ({ form }) => (
  <Form onSubmit={(e) => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Router.replace('/reserve/list')
      }
    })
  }}
  >
    <Row gutter={10}>
      <Col span={12}>
        <Form.Item label="เจ้าของแปลง">
          {form.getFieldDecorator('plantOwner', {
            rules: [
              {
                required: true,
                message: 'โปรดระบุชื่อเจ้าของแปลง',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="เบอร์โทรศัพท์">
          {form.getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: 'โปรดระบุเบอร์โทรศัพท์!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={10}>
      <Col span={12}>
        <Form.Item label="ตำบล/แขวง">
          {form.getFieldDecorator('district')(<Input />)}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="ชื่อผู้นำ/ประธานหมู่บ้าน">
          {form.getFieldDecorator('sheriffName')(<Input />)}
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Form.Item label="ที่อยู่บ้าน">
        {form.getFieldDecorator('address')(<Input />)}
      </Form.Item>
    </Row>
    <Row gutter={10}>
      <Col span={12}>
        <Form.Item label="วันที่เผา">
          {form.getFieldDecorator('burningDate')(<DatePicker />)}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="ระยะเวลาในการเผา">
          {form.getFieldDecorator('burningTime')(<Input />)}
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Form.Item label="จุดที่ต้องการเผา">
        {form.getFieldDecorator('burningLocation')(<Input />)}
      </Form.Item>
    </Row>
    <Row gutter={10}>
      <Col span={12}>
        <Form.Item label="พืชที่ปลูกในรอบปัจจุบัน">
          {form.getFieldDecorator('currentPlant')(<Input />)}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="พืชที่ปลูกในรอบถัดไป">
          {form.getFieldDecorator('futurePlant')(<Input />)}
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Form.Item label="ขนาดแปลงเพาะปลูก">
        {form.getFieldDecorator('plantSize')(<Input />)}
      </Form.Item>
    </Row>
    <Row>
      <Form.Item>
        <Button htmlType="submit">
            ส่ง
        </Button>
      </Form.Item>
    </Row>
  </Form>
)

const WrappedForm = Form.create({ name: 'register' })(RegistrationForm)

const Register = () => (
  <div>
    <h2>ลงทะเบียนวันเผา</h2>
    <WrappedForm />
  </div>
)

export default Register
