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
    const {numberReducer, dispatch}  = useContext(Context);
    const selectNumber = (select: number) => () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: 1,
                     number: select
                 })
    }

    function isButtonDisabled(number: string) {
        return numberReducer[number] > 0  && numberReducer[number] !== props.row;
    }

    function isSelected(number: string) {
        return numberReducer[number] === 1;
    }

    return <div>
        <button onClick={ selectNumber(1) }
                className={ classNames({ ["selected"]: isSelected("1") }) }
                disabled={ isButtonDisabled("1") }>1
        </button>
        <button onClick={ selectNumber(2) }
                className={ classNames({ ["selected"]: isSelected("2") }) }
                disabled={ isButtonDisabled("2") }>2
        </button>
        <button onClick={ selectNumber(3) }
                className={ classNames({ ["selected"]: isSelected("3") }) }
                disabled={ isButtonDisabled("3") }>3
        </button>
        <button onClick={ selectNumber(4) }
                className={ classNames({ ["selected"]: isSelected("4") }) }
                disabled={ isButtonDisabled("4") }>4
        </button>
        <button onClick={ selectNumber(5) }
                className={ classNames({ ["selected"]: isSelected("5") }) }
                disabled={ isButtonDisabled("5") }>5
        </button>
        <button onClick={ selectNumber(6) }
                className={ classNames({ ["selected"]: isSelected("6") }) }
                disabled={ isButtonDisabled("6") }>6
        </button>
        <button onClick={ selectNumber(7) }
                className={ classNames({ ["selected"]: isSelected("7") }) }
                disabled={ isButtonDisabled("7") }>7
        </button>
        <button onClick={ selectNumber(8) }
                className={ classNames({ ["selected"]: isSelected("8") }) }
                disabled={ isButtonDisabled("8") }>8
        </button>
        <button onClick={ selectNumber(9) }
                className={ classNames({ ["selected"]: isSelected("9") }) }
                disabled={ isButtonDisabled("9") }>9
        </button>
        <button onClick={ selectNumber(10) }
                className={ classNames({ ["selected"]: isSelected("10") }) }
                disabled={ isButtonDisabled("10") }>10
        </button>
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
        </div>
    </Context.Provider>
};


