import {assert} from 'chai'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Container from '../src/components/container'

const {render,mount}=Enzyme

Enzyme.configure({ adapter: new Adapter() })

describe('测试Container组件之render', () => {
  it('Container组件包含Header组件', () => {
    let app = render(<Container />)
    assert.equal(app.find("span.header-title").length,1)
  });
});

describe('测试Container组件之mount', () => {
  it('Container组件包含Header组件', () => {
    let app = mount(<Container />)
    assert.equal(app.find("span.header-title").length,1)
  });
});