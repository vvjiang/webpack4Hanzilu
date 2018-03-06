import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


/**
 * 首页页头
 */
const SearchHeader = (props) => {
  return (
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={props.onClickLeft}
    >
      搜书
    </NavBar>
  );
};
export default SearchHeader;
