import React, {memo, useCallback, useEffect} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import {ReduxStoreWithManager} from "app/providers/StoreProvider/config/StateSchema";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const initialReducers: ReducerList = {
        loginForm: loginReducer
    }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("login")} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    autofocus
                    placeholder={t("username")}
                    type="text"
                    className={cls.input}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t("password")}
                    type="text"
                    className={cls.input}
                />
                <Button
                    onClick={onClickLogin}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t("login")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm
