import React from 'react';
import Enzyme from './config/Enzyme.config';
import Footer from '../src/components/common/footer';

const { shallow } = Enzyme;

describe('测试Footer组件', () => {
  test('组件文本为title属性加上@本年', () => {
    const title = '123';
    const app = shallow(<Footer title={title} />);
    expect(app.text()).toBe(`${title}@${new Date().getFullYear()}`);
  });
});
