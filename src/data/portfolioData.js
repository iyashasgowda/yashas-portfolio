import {resolveAssetPath} from '../utils/links';

export const portfolioInfo = {
    email: 'iyashasgowda@gmail.com',
    linkedin: 'https://linkedin.com/in/iyashasgowda',
    twitter: 'https://twitter.com/iyashasgowda',
    facebook: 'https://facebook.com/iyashasgowda',
    instagram: 'https://instagram.com/iyashasgowda',
    github: 'https://github.com/iyashasgowda',
    self: 'https://iyashasgowda.github.io/yashas-portfolio',
    colorPalette: 'https://play.google.com/store/apps/details?id=com.blogspot.yashas003.colorpalette',
    wallpaperSh: 'https://play.google.com/store/apps/details?id=com.yashas003.wallpapersh',
    shortStories: 'https://play.google.com/store/apps/details?id=com.yashas003.shortstories',
    musify: 'https://play.google.com/store/apps/details?id=com.ash.studios.musify',
    resume: 'https://1drv.ms/b/s!AubWMQGdKBFtmEW62iCAqIoOhyN9?e=BlnnbT',
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
    {id: 'c_sharp', label: 'C#', value: '6.5', meta: 'Since 2020'},
    {id: 'java', label: 'Java', value: '7', meta: 'Since 2018'},
    {id: 'html', label: 'HTML', value: '6', meta: 'Since 2020'},
    {id: 'css', label: 'CSS', value: '6', meta: 'Since 2020'},
    {id: 'javascript', label: 'JavaScript', value: '5.5', meta: 'Since 2021'},
    {id: 'android', label: 'Android', value: '7.5', meta: 'Since 2018'},
    {id: 'dotnet', label: '.Net', value: '6.5', meta: 'Since 2020'},
    {id: 'sqlserver', label: 'SQL Server', value: '6.5', meta: 'Since 2019'},
];

export const toolSkills = [
    {id: 'eclipse', label: 'Eclipse IDE'},
    {id: 'intellij', label: 'IntelliJ IDEA'},
    {id: 'androidstudio', label: 'Android Studio'},
    {id: 'visualstudio', label: 'Visual Studio'},
    {id: 'visualstudiocode', label: 'Visual Studio Code'},
    {id: 'postman', label: 'Postman'},
    {id: 'git', label: 'Git'},
    {id: 'figma', label: 'Figma'},
    {id: 'photoshop', label: 'Photoshop'},
];

export const workItems = [
    {
        id: 'color-palette',
        title: 'Color Palette',
        date: 'Jul 5, 2019',
        description: 'Has been designed with colors that work harmoniously with each other.',
        detail: 'With this application, you can extract palettes from images, create a solid, gradient, and harmonious colors.',
        techStack: ['Palette', 'Picasso', 'Play Billing', 'Java', 'XML', 'Android Studio'],
        tags: ['#art', '#design', '#personalization', '#utility'],
        image: resolveAssetPath('/assets/images/prl/cp_prl.png'),
        hoverImage: resolveAssetPath('/assets/images/color/cp_color.png'),
        avatarImage: 'coloring',
        link: portfolioInfo.colorPalette,
    },
    {
        id: 'wallpaper-sh',
        title: 'Wallpaper.sh',
        date: 'Jan 11, 2020',
        description: 'Designed with material design rules and has a clean and modern look.',
        detail: 'With this application, you can download the wallpapers or set them as a screen background directly.',
        techStack: ['Retrofit', 'Picasso', 'Pixabay API', 'Java', 'XML', 'Android Studio'],
        tags: ['#art', '#wallpaper', '#personalization', '#picture'],
        image: resolveAssetPath('/assets/images/prl/ws_prl.png'),
        hoverImage: resolveAssetPath('/assets/images/color/ws_color.png'),
        avatarImage: 'wallpaper',
        link: portfolioInfo.wallpaperSh,
    },
    {
        id: 'short-stories',
        title: 'Short Stories',
        date: 'Mar 1, 2020',
        description: 'Provides popular short stories based on categories selected.',
        detail: 'Uses Blogger CMS as a data source. All the stories are pulled through the API using the retrofit library.',
        techStack: ['Retrofit', 'Glide', 'Blogger API', 'Java', 'XML', 'Android Studio'],
        tags: ['#info', '#story', '#readability', '#entertainment'],
        image: resolveAssetPath('/assets/images/prl/ss_prl.png'),
        hoverImage: resolveAssetPath('/assets/images/color/ss_color.png'),
        avatarImage: 'stories',
        link: portfolioInfo.shortStories,
    },
    {
        id: 'musify',
        title: 'Musify',
        date: 'Sep 9, 2020',
        description: 'Provides playback of the local mobile device music files.',
        detail: 'Musify has many features like search, sort, shuffle, repeat, fast forward, manage playlists and categories.',
        techStack: ['Circular Seek', 'Glide', 'Palette', 'Java', 'XML', 'Android Studio'],
        tags: ['#music', '#audio', '#relax', '#song'],
        image: resolveAssetPath('/assets/images/prl/mf_prl.png'),
        hoverImage: resolveAssetPath('/assets/images/color/mf_color.png'),
        avatarImage: 'music',
        link: portfolioInfo.musify,
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
