import React from 'react';
/**
 * 全屏组件
 * 此组件的作用是当内容高度不足以撑起满屏时，将内容高度撑到满屏
 */
const FullscreenContainer = (props) => {
  const styles = {
    width: '100%',
    minHeight: `calc(100vh - ${props.minusHeight}px)`,
  };
  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

export default FullscreenContainer;
