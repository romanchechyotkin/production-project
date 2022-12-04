import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "1243"
            }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("1243");
    });
    test("with empty password", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
