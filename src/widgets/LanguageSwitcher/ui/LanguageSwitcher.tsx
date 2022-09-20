import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import TranslateIcon from 'shared/assets/icons/translate.svg';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            <TranslateIcon />
            {t('language')}
        </Button>
    );
};
