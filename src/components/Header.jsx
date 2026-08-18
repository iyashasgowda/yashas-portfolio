import {navItems, portfolioInfo} from '../data/portfolioData';
import {getThemeAsset, openExternalLink} from '../utils/links';

export function Header({isDarkMode, onToggleTheme, onNavigate, onMenuOpen}) {
    return (
        <header>
            <img
                alt="logo"
                height="32"
                id="logo"
                onClick={() => openExternalLink(portfolioInfo.self)}
                src={getThemeAsset('/assets/icons/dark/logo.svg', '/assets/icons/light/logo.svg', isDarkMode)}
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
