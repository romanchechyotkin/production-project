import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/errorBoundary";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";

const MainPage = () => {
    const {t} = useTranslation("main");
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t("main")}
        </div>
    );
};

export default MainPage;
