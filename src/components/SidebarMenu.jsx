import {navItems} from '../data/portfolioData';

export function SidebarMenu({isDarkMode, menuOpen, onNavigate, onClose, onToggleTheme}) {
    const navThemeText = isDarkMode ? 'Dark Mode' : 'Light Mode';

    return (
        <div className="left-menu" id="left-menu" style={{width: menuOpen ? '100%' : '0%'}}>
            <span id="close-menu" onClick={onClose}><i className="fas fa-times"/></span>

            <ul>
                {navItems.map((item) => (
                    <li key={item.id} id={`nav-${item.id.replace('-section', '')}`} onClick={() => onNavigate(item.id)}>
                        {item.label}
                    </li>
                ))}
                <li id="nav-theme" onClick={onToggleTheme}>{navThemeText}</li>
            </ul>
        </div>
    );
}
