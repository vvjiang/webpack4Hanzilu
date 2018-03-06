import React from 'react';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import IconFA from '../../../common/iconFA';

/**
 * 首页页头
 */
const MainHeader = (props) => {
  return (
    <NavBar
      mode="dark"
      icon={<IconFA value="home" color="#fff" />}
      onLeftClick={props.onClickHome}
      rightContent={[
        <Link to="/search" key={0} style={{ color: 'inherit' }}>
          <IconFA value="search" color="#fff" />
        </Link>,
      ]}
    >
      {props.title}
    </NavBar>
  );
};
export default MainHeader;
