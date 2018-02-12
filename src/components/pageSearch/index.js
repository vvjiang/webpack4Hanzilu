import React from 'react';
import Footer from '../common/footer';
import FullscreenContainer from '../common/fullscreenContainer';

/**
 * 首页
 */
const PageMain = () => {
  return (
    <div>
      <FullscreenContainer minusHeight={100}>
        搜索页面
      </FullscreenContainer>
      <Footer title="韩子卢" />
    </div>
  );
};

export default PageMain;
