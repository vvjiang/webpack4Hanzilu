import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Enzyme from './config/Enzyme.config';
import MainHeader from '../src/components/pageMain/components/mainHeader';

const { mount } = Enzyme;

describe('测试MainHeader组件', () => {
  const title = '123';
  const callback = jest.fn();
  const app = mount((
    <Router>
      <MainHeader title={title} onClickHome={callback} />
    </Router>
  ));
  test('组件中间文本为指定的title', () => {
    expect(app.find('.am-navbar-title').text()).toBe(title);
  });

  test('点击左边图标，回调函数生效', () => {
    app.find('.am-navbar-left-icon .fa-home').simulate('click');
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);// 函数只被调用一次

    // const obj = {
    //   func: jest.fn(),
    // };
    // const num = 42;
    // obj.func.mockReturnValue(num);
    // const result = obj.func(3);

    // expect(obj.func).toBeCalled();
    // expect(obj.func.mock.calls[0][0]).toBe(3);// 这个函数被第一次调用时的第一个 arg 是 3
    // expect(result).toBe(num);
  });
});
