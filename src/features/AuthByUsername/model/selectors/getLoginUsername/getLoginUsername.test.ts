import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "roman"
            }
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("roman");
    });
    test("with empty username", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
