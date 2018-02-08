import React from 'react';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';

/**
 * 首页页头
 */
const MainHeader = (props) => {
  return (
    <NavBar
      mode="dark"
      icon={<i className="fa fa-home" />}
      onLeftClick={props.onClickHome}
      rightContent={[
        <Link to="/search" key={0} style={{ color: 'inherit' }}>
          <i className="fa fa-search" />
        </Link>,
      ]}
    >
      {props.title}
    </NavBar>
  );
};
export default MainHeader;
