import React from 'react'

const Header=(props)=>{
  return (
    <div>
      <span onClick={props.onLeftClick} style={{float:"left"}} className="header-left-title">
        {props.leftTitle}
      </span>
      <span style={{float:"right"}} className="header-right-title">
        {props.rightTitle}
      </span>
      <span  className="header-title">
        {props.title}
      </span>
    </div>
  )
}
export default Header