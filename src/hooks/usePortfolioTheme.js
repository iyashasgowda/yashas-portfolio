import {useEffect, useState} from 'react';

export function usePortfolioTheme(initialMode = true) {
    const [isDarkMode, setIsDarkMode] = useState(initialMode ?? true);

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.style.setProperty('--is-dark-mode', '1');
            root.style.setProperty('--color-primary-hex', '#eceff1');
            root.style.setProperty('--color-accent-hex', '#301934');
            root.style.setProperty('--color-primary-rgb', '236, 239, 241');
            root.style.setProperty('--color-accent-rgb', '48, 25, 52');
            root.style.setProperty('--font-weight', '900');
            root.style.setProperty('--medium-opacity', '0.8');
        } else {
            root.style.setProperty('--is-dark-mode', '0');
            root.style.setProperty('--color-primary-hex', '#301934');
            root.style.setProperty('--color-accent-hex', '#eceff1');
            root.style.setProperty('--color-primary-rgb', '48, 25, 52');
            root.style.setProperty('--color-accent-rgb', '236, 239, 241');
            root.style.setProperty('--font-weight', 'normal');
            root.style.setProperty('--medium-opacity', '0.6');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode((current) => !current);

    return {isDarkMode, toggleTheme};
}
