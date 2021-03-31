export const initState: { [index: string]: number } = {
    "1": 0,
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

export const selectNumberReducer = (state:{ [index: string]: number } = initState, action: any) => {
    switch (action.type) {
        case "SELECT_NUMBER_EVENT":
            return {
                ...state,
               [action.number]: action.area
            }
        case "CANCEL_NUMBER_EVENT":
            return {
                ...state,
                ["1"]: 0
            }
        default:
            return initState;
    }
}