import { useEffect, useState } from 'react';

function useTheme() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'midgrey' ? 'midgrey' : 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'midgrey');
        root.setAttribute('data-theme', theme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'midgrey' : 'light'));
    };

    return { theme, toggleTheme };
}

export default useTheme;
