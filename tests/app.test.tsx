import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { App } from '../src/app';

describe('app component test', () => {
    let component: any;
    beforeEach(() => {
        component = render(<App/>);
    })
    afterEach(cleanup)

    it('component should be render number 10 button and 4 areas', () => {
        expect(component.container.querySelectorAll("button").length).toBeGreaterThanOrEqual(40)
    });

    it('when number 1 button click should be call context updated', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
    });

    it('when number 2 button click should be call context updated', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
    });

    it('when line 1 number "1" is sedected line 2 number "1" should be disabled', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "2" is sedected line 2 number "2" should be disabled', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
        expect(getAllByText(/2$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/2$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "3" is sedected line 2 number "3" should be disabled', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/3$/i)[0]);

        expect(getAllByText(/3$/i)[0].className).toEqual("selected");
        expect(getAllByText(/3$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/3$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "1" is sedected other line number "1" should be disabled', (): void => {
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
        expect(getAllByText(/1$/i)[2].disabled).toBeTruthy();
    });
})
