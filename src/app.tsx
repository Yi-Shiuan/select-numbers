import classNames from "classnames";
import React, { useReducer } from 'react';
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

    const selectNumber = () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: 1,
                     number: 1
                 })
    }

    return <Context.Provider value={ {
        numberReducer,
        dispatch
    } }>
        <div>
            <button onClick={selectNumber} className={ classNames({ ["selected"]: numberReducer["1"] === 1 }) }>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
        </div>
    </Context.Provider>
};


