import {assert} from 'chai'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import Header from '../src/components/header'


const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })

describe('测试Header组件', function () {
  it('Header组件中各位置的文本符合预期输入', function () {
    const title='当前主题',leftTitle='左边主题',rightTitle='右边主题',
      leftClick=sinon.spy()

    let app = shallow(<Header title={title} leftTitle={leftTitle} rightTitle={rightTitle} onLeftClick={leftClick}/>)
    app.find('span.header-left-title').simulate("click")

    assert(leftClick.calledOnce)
    
    assert.equal(app.find('span.header-left-title').text(),leftTitle)
    assert.equal(app.find('span.header-right-title').text(),rightTitle)
    assert.equal(app.find('span.header-title').text(),title)
    
  })
  it('Header组件中左侧文本点击有效', function () {
    const title='当前主题',leftTitle='左边主题',rightTitle='右边主题',
      leftClick=sinon.spy()

    let app = shallow(<Header title={title} leftTitle={leftTitle} rightTitle={rightTitle} onLeftClick={leftClick}/>)
    app.find('span.header-left-title').simulate("click")

    assert(leftClick.calledOnce)
  })
  it('对原有函数的stub封装，可以监听原有函数的调用情况,以及模拟返回', function () {
    const obj={
        func:()=>{
           console.info(1)
        }
    }
    const num=42

    sinon.stub(obj,'func').returns(num)

    const result=obj.func(3);

    assert(obj.func.calledOnce,"判断函数仅被调用一次")
    assert.equal(obj.func.getCall(0).args[0], 3,"判断stub监听的函数的输入");
    assert.equal(result,num,"判断监听函数的返回结果与预期相同");
});

})