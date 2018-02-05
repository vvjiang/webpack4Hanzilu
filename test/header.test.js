import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import Header from '../src/components/header'

const { shallow } = Enzyme

Enzyme.configure({ adapter: new Adapter() })

test('Header组件中各位置的文本符合预期输入', function () {
    const title = '当前主题',
        leftTitle = '左边主题',
        rightTitle = '右边主题',
        leftClick = sinon.spy()

    let app = shallow(< Header title={
        title
    }
        leftTitle={
            leftTitle
        }
        rightTitle={
            rightTitle
        }
        onLeftClick={
            leftClick
        } />);
    app
        .find('span.header-left-title')
        .simulate("click")

    expect(leftClick.calledOnce)

    expect(app.find('span.header-left-title').text()).toBe(leftTitle);
    expect(app.find('span.header-right-title').text()).toBe(rightTitle);
    expect(app.find('span.header-title').text()).toBe(title);
})

test('Header组件中左侧文本点击有效', function () {
    const title = '当前主题',
        leftTitle = '左边主题',
        rightTitle = '右边主题',
        leftClick = sinon.spy()

    let app = shallow(< Header title={title} leftTitle={leftTitle} rightTitle={rightTitle} onLeftClick={leftClick} />)
    app.find('span.header-left-title').simulate("click")
    expect(leftClick.calledOnce)
})

test('对原有函数的stub封装，可以监听原有函数的调用情况,以及模拟返回', function () {
    const obj = {
        func: () => {
            console.info(1)
        }
    }
    const num = 42

    sinon.stub(obj, 'func').returns(num)

    const result = obj.func(3);

    expect(obj.func.calledOnce)
    expect(obj.func.getCall(0).args[0]).toBe(3)
    expect(result).toBe(num)
});