import {languageSkills, toolSkills} from '../../data/portfolioData';
import {getThemeAsset} from '../../utils/links';
import {SectionHeader} from '../common/SectionHeader';
import {SkillCard} from '../common/SkillCard';

const skillIconMap = {
    c_sharp: {dark: '/assets/icons/dark/c_sharp_dark.svg', light: '/assets/icons/light/c_sharp_light.svg'},
    java: {dark: '/assets/icons/dark/java_dark.svg', light: '/assets/icons/light/java_light.svg'},
    golang: {dark: '/assets/icons/dark/golang_dark.svg', light: '/assets/icons/light/golang_light.svg'},
    html: {dark: '/assets/icons/dark/html_dark.svg', light: '/assets/icons/light/html_light.svg'},
    css: {dark: '/assets/icons/dark/css_dark.svg', light: '/assets/icons/light/css_light.svg'},
    javascript: {dark: '/assets/icons/dark/javascript_dark.svg', light: '/assets/icons/light/javascript_light.svg'},
    react: {dark: '/assets/icons/dark/react_dark.svg', light: '/assets/icons/light/react_light.svg'},
    android: {dark: '/assets/icons/dark/android_dark.svg', light: '/assets/icons/light/android_light.svg'},
    docker: {dark: '/assets/icons/dark/docker_dark.svg', light: '/assets/icons/light/docker_light.svg'},
    kubernetes: {dark: '/assets/icons/dark/kubernetes_dark.svg', light: '/assets/icons/light/kubernetes_light.svg'},
    springboot: {dark: '/assets/icons/dark/springboot_dark.svg', light: '/assets/icons/light/springboot_light.svg'},
    mysql: {dark: '/assets/icons/dark/mysql_dark.svg', light: '/assets/icons/light/mysql_light.svg'},
    redis: {dark: '/assets/icons/dark/redis_dark.svg', light: '/assets/icons/light/redis_light.svg'},
    kafka: {dark: '/assets/icons/dark/kafka_dark.svg', light: '/assets/icons/light/kafka_light.svg'},
    aws: {dark: '/assets/icons/dark/aws_dark.svg', light: '/assets/icons/light/aws_light.svg'},
    linux: {dark: '/assets/icons/dark/linux_dark.svg', light: '/assets/icons/light/linux_light.svg'},
    eclipse: {dark: '/assets/icons/dark/eclipse_dark.svg', light: '/assets/icons/light/eclipse_light.svg'},
    intellij: {dark: '/assets/icons/dark/intellij_dark.svg', light: '/assets/icons/light/intellij_light.svg'},
    visualstudiocode: {dark: '/assets/icons/dark/visualstudiocode_dark.svg', light: '/assets/icons/light/visualstudiocode_light.svg'},
    postman: {dark: '/assets/icons/dark/postman_dark.svg', light: '/assets/icons/light/postman_light.svg'},
    git: {dark: '/assets/icons/dark/git_dark.svg', light: '/assets/icons/light/git_light.svg'},
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
