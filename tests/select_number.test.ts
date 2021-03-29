import {selectNumberReducer} from '../src/reducer';

describe("number select reducer test", () => {
    it('select number 1 should number 1 be not zero', () => {
        let state: {[index: string]: number} = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0
        }

        const result = selectNumberReducer(state, {type: "SELECT_NUMBER_EVENT", line: 1, number: 0})
        expect(result["1"]).toBe(1);
    });
});
