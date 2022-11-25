import React, {useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

interface DynamicModuleLoaderProps {
    reducers: ReducerList,
    removeAfterUnmount?: boolean
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
    const {children, reducers, removeAfterUnmount} = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};
