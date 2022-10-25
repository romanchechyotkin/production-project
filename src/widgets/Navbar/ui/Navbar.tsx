import React, {useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [authModal, setAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setAuthModal(!authModal);
    }, [authModal]);

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onCloseModal} theme={ButtonTheme.BACKGROUND} className={cls.links}>
                {t("login")}
            </Button>
            <LoginModal isOpen={authModal} onClose={onCloseModal} />
        </nav>
    );
};
