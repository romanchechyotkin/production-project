import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation("navbar");

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t("main")}</AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t("about")}</AppLink>
            </div>
        </nav>
    );
};
