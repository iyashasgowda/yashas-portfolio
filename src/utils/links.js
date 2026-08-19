export const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export const openMailTo = (email) => {
    openExternalLink(`mailto:${email}`);
};

export const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
};

export const getThemeAsset = (darkAsset, lightAsset, isDarkMode) =>
    isDarkMode ? lightAsset : darkAsset;
