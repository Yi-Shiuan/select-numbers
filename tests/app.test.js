import { shallow, configure } from 'enzyme';
import React from 'react'
import { App } from '../src/app';
import Adapter from 'enzyme-adapter-react-16';

describe('app component test', () =>{
    it('component should be render number 10 button', () => {
        configure({ adapter: new Adapter() })
        const t = shallow(<App/>);
        expect(t.find("button").length).toBe(10)
    });
})
