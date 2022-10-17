import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import TranslateIcon from 'shared/assets/icons/translate.svg';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            <TranslateIcon />
            {t(short ? 'short language name' : 'language')}
        </Button>
    );
};
