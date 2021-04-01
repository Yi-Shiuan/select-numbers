import { cleanup, fireEvent, render } from '@testing-library/react';
import React, { useReducer } from 'react';
import { Context } from "../src/app";
import { NumberBlock } from '../src/numberBlock'
// eslint-disable-next-line jest/no-mocks-import
import { initState, selectNumberReducer } from "./__mocks__/reducer";

const TestingComponent = (props: { [index: string]: number } = initState) => {
    const [ numberReducer, dispatch ] = useReducer(selectNumberReducer, props);
    return <Context.Provider value={ {
        numberReducer,
        dispatch
    } }>
        <div>
            <NumberBlock area={ 1 }/>
            <NumberBlock area={ 2 }/>
            <NumberBlock area={ 3 }/>
            <NumberBlock area={ 4 }/>
        </div>
    </Context.Provider>
}



describe('number block component test', () => {
    afterEach(cleanup)
    const getRender = () => render(<TestingComponent/>);
    const getNumberAlreadySelected = () => {
        const component = render(<TestingComponent/>);

        fireEvent.click(component.getAllByText(/1$/i)[0]);

        return component;
    }
    it('component should be render number 10 button and 4 areas', () => {
        const component = getRender();
        expect(component.container.querySelectorAll("button").length).toBeGreaterThanOrEqual(40)
    });

    it('when number 1 button click should be call context updated', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
    });

    it('when number 2 button click should be call context updated', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
    });

    it('when line 1 number "1" is sedected line 2 number "1" should be disabled', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "2" is sedected line 2 number "2" should be disabled', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
        expect(getAllByText(/2$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/2$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "3" is sedected line 2 number "3" should be disabled', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/3$/i)[0]);

        expect(getAllByText(/3$/i)[0].className).toEqual("selected");
        expect(getAllByText(/3$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/3$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "1" is sedected other line number "1" should be disabled', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
        expect(getAllByText(/1$/i)[2].disabled).toBeTruthy();
    });

    it('when area 2 number "1" is sedected other area number "1" should be disabled', (): void => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(/1$/i)[1]);

        expect(getAllByText(/1$/i)[1].className).toEqual("selected");
        expect(getAllByText(/1$/i)[1].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[0].disabled).toBeTruthy();
        expect(getAllByText(/1$/i)[2].disabled).toBeTruthy();
    });

    it('when number 1 already selected, click number 1 should be unselect', (): void => {
        const { getAllByText }: any = getNumberAlreadySelected();
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toBe("");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[2].disabled).toBeFalsy();
    });
})