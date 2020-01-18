import React from 'react'
import { Card } from 'antd'

const About = () => (
  <div>
    <h2>ทีมงาน JongBurn</h2>
    <Card
      style={{
        width: 700,
      }}
      cover={(
        <img
          alt="competition"
          src="/static/img/compete.jpg"
        />
      )}
    >
      <ul>
        <li>สำหรับการติดต่อเชิงธุรกิจ โทร 088-888-8888</li>
        <li>
          Email:
          <a
            href="mailto:bunyawat.38@gmail.com"
            target="_top"
          >
            bunyawat.38@gmail.com
          </a>
        </li>
      </ul>
    </Card>
  </div>
)

export default About
