import {languageSkills, toolSkills} from '../../data/portfolioData';
import {getThemeAsset} from '../../utils/links';
import {SectionHeader} from '../common/SectionHeader';
import {SkillCard} from '../common/SkillCard';

const skillIconMap = {
    c_sharp: {dark: '/assets/icons/dark/c_sharp_dark.svg', light: '/assets/icons/light/c_sharp_light.svg'},
    java: {dark: '/assets/icons/dark/java_dark.svg', light: '/assets/icons/light/java_light.svg'},
    html: {dark: '/assets/icons/dark/html_dark.svg', light: '/assets/icons/light/html_light.svg'},
    css: {dark: '/assets/icons/dark/css_dark.svg', light: '/assets/icons/light/css_light.svg'},
    javascript: {dark: '/assets/icons/dark/javascript_dark.svg', light: '/assets/icons/light/javascript_light.svg'},
    android: {dark: '/assets/icons/dark/android_dark.svg', light: '/assets/icons/light/android_light.svg'},
    dotnet: {dark: '/assets/icons/dark/dotnet_dark.svg', light: '/assets/icons/light/dotnet_light.svg'},
    sqlserver: {dark: '/assets/icons/dark/sqlserver_dark.svg', light: '/assets/icons/light/sqlserver_light.svg'},
    eclipse: {dark: '/assets/icons/dark/eclipse_dark.svg', light: '/assets/icons/light/eclipse_light.svg'},
    intellij: {dark: '/assets/icons/dark/intellij_dark.svg', light: '/assets/icons/light/intellij_light.svg'},
    androidstudio: {dark: '/assets/icons/dark/androidstudio_dark.svg', light: '/assets/icons/light/androidstudio_light.svg'},
    visualstudio: {dark: '/assets/icons/dark/visualstudio_dark.svg', light: '/assets/icons/light/visualstudio_light.svg'},
    visualstudiocode: {dark: '/assets/icons/dark/visualstudiocode_dark.svg', light: '/assets/icons/light/visualstudiocode_light.svg'},
    postman: {dark: '/assets/icons/dark/postman_dark.svg', light: '/assets/icons/light/postman_light.svg'},
    git: {dark: '/assets/icons/dark/git_dark.svg', light: '/assets/icons/light/git_light.svg'},
    figma: {dark: '/assets/icons/dark/figma_dark.svg', light: '/assets/icons/light/figma_light.svg'},
    photoshop: {dark: '/assets/icons/dark/photoshop_dark.svg', light: '/assets/icons/light/photoshop_light.svg'},
};

export function SkillsSection({isDarkMode, hoveredSkill, onSkillHover}) {
    const getSkillIcon = (id, isHovered) => {
        const selected = skillIconMap[id];
        if (!selected) return '';

        const activePath = getThemeAsset(selected.dark, selected.light, isDarkMode);
        if (!isHovered) return activePath;

        return isDarkMode ? selected.dark : selected.light;
    };

    return (
        <section id="skills-section">
            <SectionHeader title="Skills"/>

            <div className="skills-body">
                <div>
                    <h2>Languages & technologies</h2>

                    <div>
                        {languageSkills.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                id={skill.id}
                                label={skill.label}
                                value={skill.value}
                                meta={skill.meta}
                                icon={getSkillIcon(skill.id, hoveredSkill === skill.id)}
                                onHover={onSkillHover}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2>Design & development tools</h2>

                    <div>
                        {toolSkills.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                id={skill.id}
                                label={skill.label}
                                icon={getSkillIcon(skill.id, hoveredSkill === skill.id)}
                                onHover={onSkillHover}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <img alt="working_me" id="working_me" src={getThemeAsset('/assets/images/dark/working_dark.png', '/assets/images/light/working_light.png', isDarkMode)}/>

                    <p>
                        I like to code things from scratch, and enjoy bringing ideas to life. I'm naturally curious and perpetually working on improving my chops one design problem
                        at a time. I have hands on experience on some of libraries and design patterns such as: Retrofit2, Palette, Google Play Services, Picasso, Glide, Material
                        Design, Firebase, MVC, MVVM, ApexCharts, FusionCharts.
                    </p>
                </div>
            </div>
        </section>
    );
}
