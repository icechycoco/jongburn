import React from 'react'

const Logo = ({
  mode,
  size = '',
}) => (
  <div className={`logo ${size}`}>
    <img
      src={`/static/img/logo${(mode === 'light') ? '-white' : ''}.png`}
      alt="logo"
    />
  </div>
)

export default Logo
