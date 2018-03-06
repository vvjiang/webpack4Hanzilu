import React from 'react';

const IconFA = (props) => {
  const color = (props.color) || '#108ee9';
  return (
    <i style={{ width: 16, textAlign: 'center', color }} {...props} className={`fa fa-${props.value}`} />
  );
};
export default IconFA;
