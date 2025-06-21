import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function useLanguage() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pl');

    useEffect(() => {
        localStorage.setItem('language', language);
        i18n.changeLanguage(language); // ← zmiana języka globalnie
        document.documentElement.lang = language;
    }, [language, i18n]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return { language, changeLanguage };
}

export default useLanguage;
