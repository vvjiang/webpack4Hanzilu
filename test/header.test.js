import {assert} from 'chai'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../src/components/header'


const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })

describe('测试Header组件', function () {
  it('Header组件中各位置的文本符合预期输入', function () {
    const title='当前主题',leftTitle='左边主题',rightTitle='右边主题'
    let app = shallow(<Header title={title} leftTitle={leftTitle} rightTitle={rightTitle}/>)
    assert.equal(app.find('span.header-left-title').text(),leftTitle)
    assert.equal(app.find('span.header-right-title').text(),rightTitle)
    assert.equal(app.find('span.header-title').text(),title)
  })
})