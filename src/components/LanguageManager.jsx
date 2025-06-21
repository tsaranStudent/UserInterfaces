import { useEffect, useState } from 'react';

function useLanguage() {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pl');

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return { language, changeLanguage };
}

export default useLanguage;
