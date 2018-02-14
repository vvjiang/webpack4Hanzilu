import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


/**
 * 首页页头
 */
const SearchHeader = (props, context) => {
  const clickLeft = () => {
    context();
    console.info('good');
  };
  return (
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={clickLeft}
    >
      搜书
    </NavBar>
  );
};
export default SearchHeader;
