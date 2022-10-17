import React, {ButtonHTMLAttributes} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR="clear",
    OUTLINE='outline',
    BACKGROUND='background',
    INVERTED_BACKGROUND='invertedBackground'

}

export enum ButtonSize {
    M='size_m',
    L='size_l',
    XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children, className, theme, square, size = ButtonSize.M, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square] : square,
        [cls[size]]: true
    }

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
