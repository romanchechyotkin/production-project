import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation("sidebar");

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                theme={ButtonTheme.INVERTED_BACKGROUND}
                className={cls.collapsedBtn}
                type="button"
                onClick={onToggle}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <div>
                    {collapsed
                        ? (
                            <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                                <HomeIcon className={cls.icon} />
                            </AppLink>
                        )
                        : (
                            <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                                <HomeIcon className={cls.icon} />
                                <span className={cls.link}>{t("main")}</span>
                            </AppLink>
                        )}
                </div>
                <div className={cls.item}>
                    {collapsed
                        ? (
                            <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                                <AboutIcon className={cls.icon} />
                            </AppLink>
                        )
                        : (
                            <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                                <AboutIcon className={cls.icon} />
                                <span className={cls.link}>{t("about")}</span>
                            </AppLink>
                        )}
                </div>
            </div>
            <div className={cls.switchers}>
                <LanguageSwitcher short={collapsed} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
