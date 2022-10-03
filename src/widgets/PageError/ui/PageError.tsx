import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("page error")}</p>
            <Button onClick={reloadPage}>{t("update page")}</Button>
        </div>
    );
};
