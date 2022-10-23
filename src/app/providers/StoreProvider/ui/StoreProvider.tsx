import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {createReduxStore} from "../config/store";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const {children, initialState} = props;
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
