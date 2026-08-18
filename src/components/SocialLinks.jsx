import {socialLinks} from '../data/portfolioData';
import {getThemeAsset, openExternalLink} from '../utils/links';

export function SocialLinks({isDarkMode, variant = 'vertical'}) {
    const links = socialLinks.map((item) => ({
        ...item,
        src: getThemeAsset(item.darkAsset, item.lightAsset, isDarkMode),
    }));

    return (
        <div className={variant === 'vertical' ? 'social-content' : 'footer-social'}>
            <ul>
                {links.map((item) => (
                    <li key={item.id}>
                        <img
                            alt={item.id}
                            height="22"
                            id={item.id}
                            onClick={() => openExternalLink(item.href)}
                            src={item.src}
                            width="22"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
