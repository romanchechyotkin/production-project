import React, {useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [authModal, setAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setAuthModal(!authModal);
    }, [authModal]);

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.BACKGROUND} className={cls.links}>
                {t("login")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={authModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo libero quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit.
            </Modal>
        </nav>
    );
};
