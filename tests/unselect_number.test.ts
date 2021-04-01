import {selectNumberReducer} from '../src/reducer';

describe("number unselect reducer test", () => {
    let state: {[index: string]: number}
    beforeEach(() => {
        state = {
            "1": 1,
            "2": 1,
            "3": 3,
            "4": 2,
            "5": 4,
            "6": 5,
            "7": 6,
            "8": 7,
            "9": 8,
            "10": 0
        }
    })

    it('unselect number 1, number 1 should be zero', () => {
        const result = selectNumberReducer(state, {type: "UNSELECT_NUMBER_EVENT", number: 1})
        expect(result["1"]).toBe(0);
    });

    it('unselect number 2, number 2 should be zero', () => {
        const result = selectNumberReducer(state, {type: "UNSELECT_NUMBER_EVENT", number: 2})
        expect(result["2"]).toBe(0);
    });

    it('unselect number 3, number 3 should be zero', () => {
        const result = selectNumberReducer(state, {type: "UNSELECT_NUMBER_EVENT", number: 3})
        expect(result["3"]).toBe(0);
    });

});
