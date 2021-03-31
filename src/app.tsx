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
    area: number;
}

const NumberBlock = (props: NumberBlockType) => {
    const {
        numberReducer,
        dispatch
    } = useContext(Context);
    const selectNumber = (select: number) => () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: props.area,
                     number: select
                 })
    }

    function isButtonDisabled(number: string) {
        return numberReducer[number] > 0 && numberReducer[number] !== props.area;
    }

    function isSelected(number: string) {
        return numberReducer[number] === props.area;
    }

    return <div>
        {
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((item) => {
                return <button onClick={ selectNumber(item) } key={ `${ props.area }${ item }` }
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
            <NumberBlock area={ 1 }/>
            <NumberBlock area={ 2 }/>
            <NumberBlock area={ 3 }/>
            <NumberBlock area={ 4 }/>
        </div>
    </Context.Provider>
};


