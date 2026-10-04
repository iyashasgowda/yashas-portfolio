import {resolveAssetPath} from '../utils/links';

export const portfolioInfo = {
    email: 'iyashasgowda@gmail.com',
    linkedin: 'https://linkedin.com/in/iyashasgowda',
    twitter: 'https://twitter.com/iyashasgowda',
    facebook: 'https://facebook.com/iyashasgowda',
    instagram: 'https://instagram.com/iyashasgowda',
    github: 'https://github.com/iyashasgowda',
    self: 'https://iyashasgowda.com',
    colorPalette: 'https://play.google.com/store/apps/details?id=com.blogspot.yashas003.colorpalette',
    wallpaperSh: 'https://play.google.com/store/apps/details?id=com.yashas003.wallpapersh',
    shortStories: 'https://play.google.com/store/apps/details?id=com.yashas003.shortstories',
    musify: 'https://play.google.com/store/apps/details?id=com.ash.studios.musify',
    resume: 'https://drive.google.com/file/d/1EASUyc31luOCDiDzxDpdkmUtcE1zM0Na/view?usp=drive_link',
};

export const navItems = [
    {id: 'about-section', label: 'About'},
    {id: 'skills-section', label: 'Skills'},
    {id: 'work-section', label: 'Work'},
    {id: 'connect-section', label: 'Connect'},
];

export const aboutTimeline = [
    {
        type: 'work current',
        role: 'SSE',
        company: 'Shell Recharge Solutions',
        companyUrl: 'https://www.shell.in/shell-recharge.html',
        stack: 'Java - SpringBoot - JavaScript - React - MySql - Kafka - Docker - AWS',
        period: '[Nov 2025 – Present]',
    },
    {
        type: 'work',
        role: 'SDE-II',
        company: 'Zivame',
        companyUrl: 'https://zivame.com/',
        stack: 'Java - GoLang - SpringBoot - MySql - Kafka - Docker - AWS',
        period: '[Jul 2022 – Oct 2025]',
    },
    {
        type: 'work',
        role: 'SDE-I',
        company: 'iBridge, LLC',
        companyUrl: 'https://ibridgellc.com/',
        stack: 'C# - .Net - HTML - CSS - JavaScript - SQL Server',
        period: '[Jul 2020 – Jun 2022]',
    },
    {
        type: 'work',
        role: 'Intern',
        company: 'Simbus Technologies Pvt. Ltd.',
        companyUrl: 'https://www.simbustech.com',
        stack: 'Enovia PLM - JSP - MQL',
        period: '[Oct 2019 - Mar 2020]',
    },
    {
        type: 'education',
        role: 'Engineering',
        company: 'Global Academy of Technology',
        companyUrl: 'https://www.gat.ac.in',
        stack: 'Electronics & Communication Engg - Android - Java',
        period: '[2016 - 2019]',
    },
    {
        type: 'education',
        role: 'Diploma',
        company: 'MEI Polytechnic',
        companyUrl: 'https://meipolytechnic.com',
        stack: 'Electronics & Communication Engg',
        period: '[2013 - 2016]',
    },
];

export const languageSkills = [
    {id: 'java', label: 'Java', value: '8', meta: 'Since 2018'},
    {id: 'golang', label: 'Go', value: '7.5', meta: 'Since 2023'},
    {id: 'javascript', label: 'JavaScript', value: '6.5', meta: 'Since 2021'},
    {id: 'react', label: 'React', value: '6', meta: 'Since 2020'},
    {id: 'c_sharp', label: 'C#', value: '6.5', meta: 'Since 2020'},
    {id: 'html', label: 'HTML', value: '6.5', meta: 'Since 2020'},
    {id: 'css', label: 'CSS', value: '6.5', meta: 'Since 2020'},
    {id: 'android', label: 'Android', value: '7.5', meta: 'Since 2018'},
];

export const toolSkills = [
    {id: 'docker', label: 'Docker'},
    {id: 'kubernetes', label: 'Kubernetes'},
    {id: 'springboot', label: 'Spring Boot'},
    {id: 'mysql', label: 'MySQL'},
    {id: 'redis', label: 'Redis'},
    {id: 'kafka', label: 'Kafka'},
    {id: 'aws', label: 'AWS'},
    {id: 'linux', label: 'Linux'},
    {id: 'git', label: 'Git'},
    {id: 'intellij', label: 'IntelliJ IDEA'},
    {id: 'visualstudiocode', label: 'Visual Studio Code'},
    {id: 'postman', label: 'Postman'},
];

export const workItems = [
    {
        id: 'color-palette',
        title: 'Color Palette',
        date: 'v3.4.0',
        description: 'Simple tool to create custom colors, browse, extract, and save gradients.',
        techStack: ['Android', 'Java', 'Material Design', 'Image Processing'],
        avatarImage: 'colorpalette',
        highlights: ['4.7★', '5,00,000+ ⭳', '1.78K 🗩'],
        image: resolveAssetPath('/assets/images/work/color-palette.png'),
        bgColor: '#FF6B6B',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blogspot.yashas003.colorpalette',
    },
    {
        id: 'mounaraaga',
        title: 'Mounaraaga',
        date: 'v1.0.0-beta11',
        description: 'Relive the Golden Era of Kannada Cinema through comprehensive music streaming.',
        techStack: ['Android', 'Java', 'Music Streaming', 'Kannada Cinema'],
        avatarImage: 'mounaraaga',
        highlights: ['5.0★', '100+ ⭳', '0 🗩'],
        image: resolveAssetPath('/assets/images/work/mounaraaga.png'),
        bgColor: '#FFD93D',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.iyashasgowda.mounaraaga',
    },
    {
        id: 'nesscoloura',
        title: 'Nesscoloura - An Art Museum',
        date: 'v1.5.0',
        description: 'Share & discover art. Connect with artists worldwide. Inspire creativity.',
        techStack: ['Android', 'Java', 'Social Networking', 'Community'],
        avatarImage: 'nesscoloura',
        highlights: ['5.0★', '100+ ⭳', '0 🗩'],
        image: resolveAssetPath('/assets/images/work/nesscoloura.png'),
        bgColor: '#00ADD8',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nesscoloura',
    },
    {
        id: 'short-stories',
        title: 'Short Stories',
        date: 'v2.1.0',
        description: 'We tell ourselves stories in order to live.',
        techStack: ['Android', 'Java', 'Material Design', 'Content Management'],
        avatarImage: 'shortstories',
        highlights: ['5.0★', '1000+ ⭳', '28 🗩'],
        image: resolveAssetPath('/assets/images/work/short-stories.png'),
        bgColor: '#667BC6',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yashas003.shortstories',
    },
    {
        id: 'wallpaper-sh',
        title: 'Wallpaper.sh',
        date: 'v1.7.0',
        description: 'Cool & beautiful wallpapers for every device.',
        techStack: ['Android', 'Java', 'Material Design', 'API Integration'],
        avatarImage: 'wallpapersh',
        highlights: ['4.9★', '1000+ ⭳', '45 🗩'],
        image: resolveAssetPath('/assets/images/work/wallpaper-sh.png'),
        bgColor: '#50C878',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yashas003.wallpapersh',
    },
];

export const socialLinks = [
    {id: 'github', href: portfolioInfo.github, darkAsset: resolveAssetPath('/assets/icons/dark/github.svg'), lightAsset: resolveAssetPath('/assets/icons/light/github.svg')},
    {id: 'linkedin', href: portfolioInfo.linkedin, darkAsset: resolveAssetPath('/assets/icons/dark/linkedin.svg'), lightAsset: resolveAssetPath('/assets/icons/light/linkedin.svg')},
    {id: 'twitter', href: portfolioInfo.twitter, darkAsset: resolveAssetPath('/assets/icons/dark/twitter.svg'), lightAsset: resolveAssetPath('/assets/icons/light/twitter.svg')},
    {id: 'instagram', href: portfolioInfo.instagram, darkAsset: resolveAssetPath('/assets/icons/dark/instagram.svg'), lightAsset: resolveAssetPath('/assets/icons/light/instagram.svg')},
    {id: 'facebook', href: portfolioInfo.facebook, darkAsset: resolveAssetPath('/assets/icons/dark/facebook.svg'), lightAsset: resolveAssetPath('/assets/icons/light/facebook.svg')},
];

export const footerLinks = [
    ...socialLinks,
    {id: 'gmail', href: `mailto:${portfolioInfo.email}`, darkAsset: resolveAssetPath('/assets/icons/dark/gmail.svg'), lightAsset: resolveAssetPath('/assets/icons/light/gmail.svg')},
];
