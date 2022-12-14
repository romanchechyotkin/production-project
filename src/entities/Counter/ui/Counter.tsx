import React from "react";
import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../model/selecotrs/getCounterValue/getCounterValue";
import {counterActions} from "../model/slice/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value-id">{counterValue}</h1>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </div>
    );
};
