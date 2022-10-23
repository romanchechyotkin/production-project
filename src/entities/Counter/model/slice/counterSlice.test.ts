import {CounterSchema} from "entities/Counter";
import {counterReducer, counterActions} from "./counterSlice";

describe("counterSlice.test", () => {
    test("increment", () => {
        const state: CounterSchema = {
            value: 0
        };
        const action = counterActions.increment();
        expect(counterReducer(state, action)).toEqual({value: 1});
    });
    test("decrement", () => {
        const state: CounterSchema = {
            value: 0
        };
        const action = counterActions.decrement();
        expect(counterReducer(state, action)).toEqual({value: -1});
    });
    test("incrementByAmount", () => {
        const state: CounterSchema = {
            value: 0
        };
        const action = counterActions.incrementByAmount(100);
        expect(counterReducer(state, action)).toEqual({value: 100});
    });
    test("without state", () => {
        const action = counterActions.incrementByAmount(100);
        expect(counterReducer(undefined, action)).toEqual({value: 100});
    });
});
