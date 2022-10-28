import React, {memo, useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginActions} from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading
    } = useSelector(getLoginState);

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
    );
});
