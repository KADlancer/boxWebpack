import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'
import Clock from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Link changes the class when hovered', () => {
    it('should render correctly', () => {
        const component = shallow(<Clock fixedTime>It is: </Clock>)
        const tree = shallowToJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should set the state to class: STATUS:HOVER if onMouseEnter is called', () => {
        const component = shallow(<Clock fixedTime>It is: </Clock>)
        component.instance().onMouseEnter()
        expect(component.state('class')).toBe('Clock hovered')
    })
    /*
    // manually trigger the callback

    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseLeave()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    */
})
