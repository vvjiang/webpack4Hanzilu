import React from 'react';

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
