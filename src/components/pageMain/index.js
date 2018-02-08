import React from 'react';
import MainHeader from './components/mainHeader';
import Footer from '../footer';
import FullscreenContainer from '../fullscreenContainer';
import Bookshelf from '../bookshelf';

/**
 * 首页
 */
const PageMain = () => {
  return (
    <div>
      <MainHeader title="123" onClickHome={() => { }} />
      <FullscreenContainer minusHeight={100}>
        <Bookshelf />
      </FullscreenContainer>
      <Footer title="韩子卢" />
    </div>
  );
};

export default PageMain;
