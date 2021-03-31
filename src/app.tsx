import classNames from "classnames";
import React, { useContext, useReducer } from 'react';
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

interface NumberBlockType {
    row: number;
}

const NumberBlock = (props: NumberBlockType) => {
    const {
        numberReducer,
        dispatch
    } = useContext(Context);
    const selectNumber = (select: number) => () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: 1,
                     number: select
                 })
    }

    function isButtonDisabled(number: string) {
        return numberReducer[number] > 0 && numberReducer[number] !== props.row;
    }

    function isSelected(number: string) {
        return numberReducer[number] === 1;
    }

    return <div>
        {
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((item) => {
                return <button onClick={ selectNumber(item) } key={ `${ props.row }${ item }` }
                               className={ classNames({ ["selected"]: isSelected(item.toString()) }) }
                               disabled={ isButtonDisabled(item.toString()) }> { item }
                </button>
            })
        }
    </div>;
}

export const App: React.FunctionComponent = (): JSX.Element => {
    const [ numberReducer, dispatch ] = useReducer(selectNumberReducer, initState);

    return <Context.Provider value={ {
        numberReducer,
        dispatch
    } }>
        <div>
            <NumberBlock row={ 1 }/>
            <NumberBlock row={ 2 }/>
            <NumberBlock row={ 3 }/>
            <NumberBlock row={ 4 }/>
        </div>
    </Context.Provider>
};


