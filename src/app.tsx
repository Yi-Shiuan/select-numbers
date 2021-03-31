import React, { useReducer } from 'react';
import { NumberBlock } from "./numberBlock";
import { initState, selectNumberReducer } from "./reducer";

export const Context = React.createContext<any>({
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
                                                });

export const App: React.FunctionComponent = (): JSX.Element => {
    const [ numberReducer, dispatch ] = useReducer(selectNumberReducer, initState);

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
};


