import React from 'react';
import MainHeader from './components/mainHeader';
import Footer from '../footer';
import FullscreenContainer from '../fullscreenContainer';
import Bookshelf from '../bookshelf';

/**
 * 首页
 */
const PageMain = () => {
  const data = [{
    id: '1',
    title: '123',
    description: '123',
  }, {
    id: '2',
    title: '234',
    description: '234',
  }];
  return (
    <div>
      <MainHeader title="123" onClickHome={() => { }} />
      <FullscreenContainer minusHeight={100}>
        <Bookshelf dataSource={data} />
      </FullscreenContainer>
      <Footer title="韩子卢" />
    </div>
  );
};

export default PageMain;
