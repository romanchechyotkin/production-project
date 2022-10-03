import React from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/errorBoundary";

const MainPage = () => {
    const {t} = useTranslation("main");

    return (
        <div>
            {t("main")}
        </div>
    );
};

export default MainPage;
