import {footerLinks, portfolioInfo} from '../data/portfolioData';
import {getThemeAsset, openExternalLink, openMailTo} from '../utils/links';

export function Footer({isDarkMode}) {
    return (
        <footer>
            <p>
                &copy; 2021 - Design & Developed by
                <span id="copyright_name" onClick={() => openExternalLink(portfolioInfo.self)}>Yashas Gowda</span>
            </p>

            <ul>
                {footerLinks.map((item) => (
                    <li key={item.id}>
                        <img
                            alt={item.id}
                            height="18"
                            id={item.id}
                            onClick={() => (item.id === 'gmail' ? openMailTo(portfolioInfo.email) : openExternalLink(item.href))}
                            src={getThemeAsset(item.darkAsset, item.lightAsset, isDarkMode)}
                            width="18"
                        />
                    </li>
                ))}
            </ul>
        </footer>
    );
}
