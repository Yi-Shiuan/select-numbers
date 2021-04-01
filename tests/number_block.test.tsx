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


const resetButton = /reset/i;
const number3 = /3$/i;
const number4 = /4$/i;
const number1 = /1$/i;
const number2 = /2$/i;
describe('number block component test', () => {
    afterEach(cleanup)
    const getRender = () => render(<TestingComponent/>);
    const getNumberAlreadySelected = (reg: RegExp, area: number) => {
        const component = render(<TestingComponent/>);

        fireEvent.click(component.getAllByText(reg)[area - 1]);

        return component;
    }
    const getNumberAreaSelected = () => {
        const component = render(<TestingComponent/>);

        fireEvent.click(component.getAllByText(number1)[0]);
        fireEvent.click(component.getAllByText(number2)[0]);

        fireEvent.click(component.getAllByText(number3)[1]);
        fireEvent.click(component.getAllByText(number4)[1]);

        fireEvent.click(component.getAllByText(/5$/i)[2]);
        fireEvent.click(component.getAllByText(/6$/i)[2]);

        fireEvent.click(component.getAllByText(/7$/i)[3]);
        fireEvent.click(component.getAllByText(/8$/i)[3]);

        return component;
    }

    const triggerNumberClick = (numberButton: RegExp, area: number) => {
        const { getAllByText }: any = getRender();
        fireEvent.click(getAllByText(numberButton)[area]);
        return getAllByText;
    };

    it('component should be render number 10 button and 4 areas', () => {
        const component = getRender();
        expect(component.container.querySelectorAll("button").length).toBeGreaterThanOrEqual(40)
    });
    
    it('when number 1 button click should be call context updated', (): void => {
        const getAllByText = triggerNumberClick(number1, 0);

        expect(getAllByText(number1)[0].className).toEqual("selected");
    });

    it('when number 2 button click should be call context updated', (): void => {
        const getAllByText = triggerNumberClick(number2, 0);

        expect(getAllByText(number2)[0].className).toEqual("selected");
    });

    it('when line 1 number "1" is sedected line 2 number "1" should be disabled', (): void => {
        const getAllByText = triggerNumberClick(number1, 0);

        expect(getAllByText(number1)[0].className).toEqual("selected");
        expect(getAllByText(number1)[0].disabled).toBeFalsy();
        expect(getAllByText(number1)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "2" is sedected line 2 number "2" should be disabled', (): void => {
        const getAllByText = triggerNumberClick(number2, 0);

        expect(getAllByText(number2)[0].className).toEqual("selected");
        expect(getAllByText(number2)[0].disabled).toBeFalsy();
        expect(getAllByText(number2)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "3" is sedected line 2 number "3" should be disabled', (): void => {
        const getAllByText = triggerNumberClick(number3, 0);

        expect(getAllByText(number3)[0].className).toEqual("selected");
        expect(getAllByText(number3)[0].disabled).toBeFalsy();
        expect(getAllByText(number3)[1].disabled).toBeTruthy();
    });

    it('when line 1 number "1" is sedected other line number "1" should be disabled', (): void => {
        const getAllByText = triggerNumberClick(number1, 0);

        expect(getAllByText(number1)[0].className).toEqual("selected");
        expect(getAllByText(number1)[0].disabled).toBeFalsy();
        expect(getAllByText(number1)[1].disabled).toBeTruthy();
        expect(getAllByText(number1)[2].disabled).toBeTruthy();
    });

    it('when area 2 number "1" is sedected other area number "1" should be disabled', (): void => {
        const getAllByText = triggerNumberClick(number1, 1);

        expect(getAllByText(number1)[1].className).toEqual("selected");
        expect(getAllByText(number1)[1].disabled).toBeFalsy();
        expect(getAllByText(number1)[0].disabled).toBeTruthy();
        expect(getAllByText(number1)[2].disabled).toBeTruthy();
    });

    it('when number 1 already selected, click number 1 should be unselect', (): void => {
        const { getAllByText }: any = getNumberAlreadySelected(number1, 1);
        fireEvent.click(getAllByText(number1)[0]);

        expect(getAllByText(number1)[0].className).toBe("");
        expect(getAllByText(number1)[0].disabled).toBeFalsy();
        expect(getAllByText(number1)[1].disabled).toBeFalsy();
        expect(getAllByText(number1)[2].disabled).toBeFalsy();
    });

    it('when number 2 already selected, click number 2 should be unselect', (): void => {
        const { getAllByText }: any = getNumberAlreadySelected(number2, 1);
        fireEvent.click(getAllByText(number2)[0]);

        expect(getAllByText(number2)[0].className).toBe("");
        expect(getAllByText(number2)[0].disabled).toBeFalsy();
        expect(getAllByText(number2)[1].disabled).toBeFalsy();
        expect(getAllByText(number2)[2].disabled).toBeFalsy();
    });

    it('when area 2 number 2 already selected, click number 2 should be unselect', (): void => {
        const { getAllByText }: any = getNumberAlreadySelected(number2, 2);
        fireEvent.click(getAllByText(number2)[1]);

        expect(getAllByText(number2)[1].className).toBe("");
        expect(getAllByText(number2)[1].disabled).toBeFalsy();
        expect(getAllByText(number2)[0].disabled).toBeFalsy();
        expect(getAllByText(number2)[2].disabled).toBeFalsy();
    });

    it('when area 1 reset button click, the area selected number should be clean', (): void => {
        const { getAllByText }: any = getNumberAreaSelected();
        fireEvent.click(getAllByText(resetButton)[0]);

        expect(getAllByText(number1)[0].className).toBe("");
        expect(getAllByText(number2)[0].className).toBe("");
    });

    it('when area 2 reset button click, the area selected number should be clean', (): void => {
        const { getAllByText }: any = getNumberAreaSelected();
        fireEvent.click(getAllByText(resetButton)[1]);

        expect(getAllByText(number3)[0].className).toBe("");
        expect(getAllByText(number4)[0].className).toBe("");
    });
})