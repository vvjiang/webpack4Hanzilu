import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import Header from '../src/components/header'

const { shallow } = Enzyme

Enzyme.configure({ adapter: new Adapter() })
describe("测试123", () => {
    test('Header组件中各位置的文本符合预期输入', function () {
        const title = '当前主题',
            leftTitle = '左边主题',
            rightTitle = '右边主题',
            leftClick = jest.fn()

        let app = shallow(< Header title={title} leftTitle={leftTitle} rightTitle={rightTitle} onLeftClick={leftClick} />);
        app.find('span.header-left-title').simulate("click")

        expect(leftClick).toBeCalled()
        expect(leftClick.mock.calls.length).toBe(1);//函数只被调用一次

        expect(app.find('span.header-left-title').text()).toBe(leftTitle);
        expect(app.find('span.header-right-title').text()).toBe(rightTitle);
        expect(app.find('span.header-title').text()).toBe(title);
    })
})


test('Header组件中左侧文本点击有效', function () {
    const title = '当前主题',
        leftTitle = '左边主题',
        rightTitle = '右边主题',
        leftClick = jest.fn()

    let app = shallow(< Header title={title} leftTitle={leftTitle} rightTitle={rightTitle} onLeftClick={leftClick} />)
    app.find('span.header-left-title').simulate("click")
    expect(leftClick).toBeCalled()
})

test('对原有函数的stub封装，可以监听原有函数的调用情况,以及模拟返回', function () {
    const obj = {
        func: jest.fn()
    }
    const num = 42
    obj.func.mockReturnValue(num)
    const result = obj.func(3)

    expect(obj.func).toBeCalled()
    expect(obj.func.mock.calls[0][0]).toBe(3)//这个函数被第一次调用时的第一个 arg 是 3
    expect(result).toBe(num)
});