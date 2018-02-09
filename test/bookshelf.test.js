import React from 'react';
import Enzyme from './config/Enzyme.config';
import Bookshelf from '../src/components/bookshelf';

const { mount } = Enzyme;

describe('测试Bookshelf组件', () => {
  const data = [{
    id: '1',
    title: '123',
    description: '123',
  }, {
    id: '2',
    title: '234',
    description: '234',
  }];
  const app = mount(<Bookshelf dataSource={data} />);
  test('Bookshelf组件列表长度符合预期', () => {
    expect(app.find('.am-list-item').length).toBe(data.length);
  });
  test('Bookshelf组件列表项内容符合预期', () => {
    expect(app.find('.am-list-brief').first().text()).toBe(data[0].description);
  });
});
