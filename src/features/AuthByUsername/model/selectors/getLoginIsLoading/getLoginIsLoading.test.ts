import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("with empty isLoading", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
