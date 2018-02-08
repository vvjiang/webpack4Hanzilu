import React from 'react';

/**
 * 页脚
 */
const Footer = (props) => {
  const height = 55;
  return (
    <div className="fColor-999 text-center" style={{ height, lineHeight: `${height}px` }}>
      {`${props.title}@${new Date().getFullYear()}`}
    </div>
  );
};
export default Footer;
