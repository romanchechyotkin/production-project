import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
