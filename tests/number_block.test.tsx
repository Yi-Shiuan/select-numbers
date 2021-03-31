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
    let component: any;
    afterEach(cleanup)

    it('component should be render number 10 button and 4 areas', () => {
        component = render(<TestingComponent/>);
        expect(component.container.querySelectorAll("button").length).toBeGreaterThanOrEqual(40)
    });

    it('when number 1 button click should be call context updated', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
    });

    it('when number 2 button click should be call context updated', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
    });

    it('when line 1 number "1" is sedected line 2 number "1" should be disabled', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "2" is sedected line 2 number "2" should be disabled', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/2$/i)[0]);

        expect(getAllByText(/2$/i)[0].className).toEqual("selected");
        expect(getAllByText(/2$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/2$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "3" is sedected line 2 number "3" should be disabled', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/3$/i)[0]);

        expect(getAllByText(/3$/i)[0].className).toEqual("selected");
        expect(getAllByText(/3$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/3$/i)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "1" is sedected other line number "1" should be disabled', (): void => {
        component = render(<TestingComponent/>);
        const { getAllByText }: any = component;
        fireEvent.click(getAllByText(/1$/i)[0]);

        expect(getAllByText(/1$/i)[0].className).toEqual("selected");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeTruthy();
        expect(getAllByText(/1$/i)[2].disabled).toBeTruthy();
    });

    it('when area 2 number "1" is sedected other area number "1" should be disabled', (): void => {
        const { getAllByText }: any = render(<TestingComponent/>);
        fireEvent.click(getAllByText(/1$/i)[1]);

        expect(getAllByText(/1$/i)[1].className).toEqual("selected");
        expect(getAllByText(/1$/i)[1].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[0].disabled).toBeTruthy();
        expect(getAllByText(/1$/i)[2].disabled).toBeTruthy();
    });

    it('when area 1 number "1" already selected, click area 1 number "1" should be unselect', (): void => {
        const s = {
            "1": 1,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0
        }
        const { getAllByText }: any = render(<TestingComponent { ...s }/>);
        fireEvent.click(getAllByText(/1$/i)[1]);

        expect(getAllByText(/1$/i)[0].className).toEqual("");
        expect(getAllByText(/1$/i)[0].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeFalsy();
        expect(getAllByText(/1$/i)[1].disabled).toBeFalsy();
    });
})