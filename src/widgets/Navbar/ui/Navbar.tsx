import React, {useCallback, useEffect, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [authModal, setAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogout} theme={ButtonTheme.BACKGROUND} className={cls.links}>
                    {t("logout")}
                </Button>
                <LoginModal isOpen={authModal} onClose={onCloseModal} />
            </nav>
        );
    }

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onShowModal} theme={ButtonTheme.BACKGROUND} className={cls.links}>
                {t("login")}
            </Button>
            <LoginModal isOpen={authModal} onClose={onCloseModal} />
        </nav>
    );
};
