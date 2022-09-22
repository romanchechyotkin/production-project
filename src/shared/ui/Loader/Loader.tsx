import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({className}) => (
    <div className={classNames("lds-ring", {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
