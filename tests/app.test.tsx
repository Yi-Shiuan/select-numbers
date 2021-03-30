import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { App, Context } from '../src/app';

describe('app component test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<App/>);
    })

    it('component should be render number 10 button', () => {
        expect(component.container.querySelectorAll("button").length).toBe(10)
    });

    it('when number 1 button click should be call context updated', (): void => {
        const { getByText }: any = component;
        fireEvent.click(getByText(/1$/i));

        expect(getByText(/1$/i).className).toEqual("selected");
    });
})
