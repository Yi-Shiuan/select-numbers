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
    const selectNumber =  (select: number) => () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: 1,
                     number: select
                 })
    }

    return <Context.Provider value={ {
        numberReducer,
        dispatch
    } }>
        <div>
            <button onClick={ selectNumber(1) } className={ classNames({ ["selected"]: numberReducer["1"] === 1 }) }>1</button>
            <button onClick={ selectNumber(2) } className={ classNames({ ["selected"]: numberReducer["2"] === 1 }) }>2</button>
            <button onClick={ selectNumber(3) } className={ classNames({ ["selected"]: numberReducer["3"] === 1 }) }>3</button>
            <button onClick={ selectNumber(4) } className={ classNames({ ["selected"]: numberReducer["4"] === 1 }) }>4</button>
            <button onClick={ selectNumber(5) } className={ classNames({ ["selected"]: numberReducer["5"] === 1 }) }>5</button>
            <button onClick={ selectNumber(6) } className={ classNames({ ["selected"]: numberReducer["6"] === 1 }) }>6</button>
            <button onClick={ selectNumber(7) } className={ classNames({ ["selected"]: numberReducer["7"] === 1 }) }>7</button>
            <button onClick={ selectNumber(8) } className={ classNames({ ["selected"]: numberReducer["8"] === 1 }) }>8</button>
            <button onClick={ selectNumber(9) } className={ classNames({ ["selected"]: numberReducer["9"] === 1 }) }>9</button>
            <button onClick={ selectNumber(10) } className={ classNames({ ["selected"]: numberReducer["10"] === 1 }) }>10</button>
        </div>
    </Context.Provider>
};


