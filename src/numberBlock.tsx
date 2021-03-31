import classNames from "classnames";
import React, { useContext} from 'react';
import { Context } from "./app";
interface NumberBlockType {
    area: number;
}

export const NumberBlock = (props: NumberBlockType) => {
    const {
        numberReducer,
        dispatch
    } = useContext(Context);
    const selectNumber = (number: number) => () => {
        dispatch({
                     type: "SELECT_NUMBER_EVENT",
                     area: props.area,
                     number: number
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


