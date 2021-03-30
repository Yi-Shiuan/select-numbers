import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { App } from '../src/app';

describe('app component test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<App/>);
    })
    afterEach(cleanup)

    it('component should be render number 10 button', () => {
        expect(component.container.querySelectorAll("button").length).toBe(10)
    });

    it('when number 1 button click should be call context updated', (): void => {
        const { getByText }: any = component;
        fireEvent.click(getByText(/1$/i));

        expect(getByText(/1$/i).className).toEqual("selected");
    });

    it('when number 2 button click should be call context updated', (): void => {
        const { getByText }: any = component;
        fireEvent.click(getByText(/2$/i));

        expect(getByText(/2$/i).className).toEqual("selected");
    });
})
