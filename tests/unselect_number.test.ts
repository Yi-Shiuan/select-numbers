import {selectNumberReducer} from '../src/reducer';

describe("number unselect reducer test", () => {
    let state: {[index: string]: number}
    beforeEach(() => {
        state = {
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
    })

    it('unselect number 1, number 1 should be zero', () => {
        const result = selectNumberReducer(state, {type: "CANCEL_NUMBER_EVENT", number: 1})
        expect(result["1"]).toBe(0);
    });

});
