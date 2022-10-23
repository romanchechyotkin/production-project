import React from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/errorBoundary";
import {Counter} from "entities/Counter";

const MainPage = () => {
    const {t} = useTranslation("main");

    return (
        <div>
            {t("main")}
            <Counter />
        </div>
    );
};

export default MainPage;
