import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Container from '../src/components/container'

const {render,mount} = Enzyme

Enzyme.configure({
    adapter: new Adapter()
})

test('Container组件包含Header组件', () => {
    let app = render(<Container />)
    expect(app.find("span.header-title").length).toBe(1)
})

test('Container组件包含Header组件', () => {
    let app = mount( <Container />)
    expect(app.find("span.header-title").length).toBe(1)
});