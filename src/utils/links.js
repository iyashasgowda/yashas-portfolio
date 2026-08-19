export const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export const openMailTo = (email) => {
    openExternalLink(`mailto:${email}`);
};

export const resolveAssetPath = (assetPath) => {
    if (/^(?:https?:)?\/\//.test(assetPath) || assetPath.startsWith(import.meta.env.BASE_URL)) {
        return assetPath;
    }

    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;
};

export const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
};

export const getThemeAsset = (darkAsset, lightAsset, isDarkMode) =>
    resolveAssetPath(isDarkMode ? lightAsset : darkAsset);
