import React from 'react'
import { Table } from 'antd'
import MOCK from '../../src/mock'

const COLUMNS = [
  {
    title: 'ชื่อ',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'อำเภอ/แขวง',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'ผู้นำหมู่บ้าน/ตำบล',
    dataIndex: 'sheriff',
    key: 'sheriff',
  },
  {
    title: 'ที่อยู่',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'วันที่จอง',
    dataIndex: 'reserveDate',
    key: 'reserveDate',
  },
  {
    title: 'วันที่ยืนยัน',
    dataIndex: 'approvalDate',
    key: 'approvalDate',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
  },
]

const ReservedList = () => (
  <div>
    <h2>รายชื่อผู้ลงทะเบียน</h2>
    <Table
      columns={
          COLUMNS
      }
      dataSource={MOCK.RESERVED_LIST
        .map((row, index) => ({ ...row, key: `reserved-${index}` }))}
    />
  </div>
)

export default ReservedList
