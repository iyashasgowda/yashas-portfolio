import {useEffect, useRef, useState} from 'react';

import {navItems, portfolioInfo} from '../data/portfolioData';
import {getThemeAsset, openExternalLink} from '../utils/links';

export function Header({isDarkMode, onToggleTheme, onNavigate, onMenuOpen}) {
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [headerStyle, setHeaderStyle] = useState({
        top: '0',
        height: '88px',
        boxShadow: '0 0 0 0 transparent',
    });
    const previousOffsetRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.pageYOffset;
            const previous = previousOffsetRef.current;

            let nextStyle = previous > current
                ? {top: '0', height: '72px', boxShadow: '0 0 20px 2px rgba(0, 0, 0, 0.4)'}
                : {top: '-72px', height: '72px', boxShadow: '0 0 0 0 transparent'};

            if (current === 0) {
                nextStyle = {top: '0', height: '88px', boxShadow: '0 0 0 0 transparent'};
            }

            const isBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
            if (isBottom) {
                nextStyle = {top: '0', height: '88px', boxShadow: '0 0 20px 2px rgba(0, 0, 0, 0.4)'};
            }

            setHeaderStyle(nextStyle);
            previousOffsetRef.current = current;
        };

        previousOffsetRef.current = window.pageYOffset;
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={headerStyle}>
            <img
                alt="logo"
                height="32"
                id="logo"
                onClick={() => openExternalLink(portfolioInfo.self)}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                src={isLogoHovered
                    ? getThemeAsset('/assets/icons/dark/logo_filled.png', '/assets/icons/light/logo_filled.png', isDarkMode)
                    : getThemeAsset('/assets/icons/dark/logo.svg', '/assets/icons/light/logo.svg', isDarkMode)}
                width="32"
            />

            <div>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} id={item.id.replace('-section', '')} onClick={() => onNavigate(item.id)}>
                            {item.label}
                        </li>
                    ))}
                </ul>

                <img
                    alt="dark_mode"
                    height="24"
                    id="dark-mode-btn"
                    onClick={onToggleTheme}
                    src={getThemeAsset('/assets/icons/dark/light_mode.svg', '/assets/icons/light/dark_mode.svg', isDarkMode)}
                    width="24"
                />
            </div>

            <img
                alt="header_menu"
                height="24"
                id="header_menu"
                onClick={() => onMenuOpen(true)}
                src={getThemeAsset('/assets/icons/dark/menu.svg', '/assets/icons/light/menu.svg', isDarkMode)}
                width="24"
            />
        </header>
    );
}
