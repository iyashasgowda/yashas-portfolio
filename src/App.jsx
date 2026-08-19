import {useMemo, useState} from 'react';

import {Header} from './components/Header';
import {SidebarMenu} from './components/SidebarMenu';
import {SocialLinks} from './components/SocialLinks';
import {Footer} from './components/Footer';
import {IntroSection} from './components/sections/IntroSection';
import {AboutSection} from './components/sections/AboutSection';
import {SkillsSection} from './components/sections/SkillsSection';
import {WorkSection} from './components/sections/WorkSection';
import {ConnectSection} from './components/sections/ConnectSection';
import {portfolioInfo} from './data/portfolioData';
import {usePortfolioTheme} from './hooks/usePortfolioTheme';
import {openMailTo, scrollToSection} from './utils/links';

function App() {
    const {isDarkMode, toggleTheme} = usePortfolioTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const currentAge = useMemo(() => {
        const dob = new Date(1997, 10, 3, 0, 0, 0, 0);
        const diffMs = Date.now() - dob.getTime();
        const ageDate = new Date(diffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }, []);

    const handleNavigate = (sectionId) => {
        scrollToSection(sectionId);
        setMenuOpen(false);
    };

    return (
        <>
            <main>
                <div className="main-content">
                    <IntroSection isDarkMode={isDarkMode}/>
                    <AboutSection currentAge={currentAge}/>
                    <SkillsSection isDarkMode={isDarkMode} hoveredSkill={hoveredSkill} onSkillHover={setHoveredSkill}/>
                    <WorkSection isDarkMode={isDarkMode}/>
                    <ConnectSection isDarkMode={isDarkMode} onScrollTop={() => scrollToSection('main-section')}/>
                    <Footer isDarkMode={isDarkMode}/>
                </div>

                <SocialLinks isDarkMode={isDarkMode}/>

                <div className="email-content">
                    <p id="email" onClick={() => openMailTo(portfolioInfo.email)}>{portfolioInfo.email}</p>
                </div>
            </main>

            <Header
                isDarkMode={isDarkMode}
                onMenuOpen={setMenuOpen}
                onNavigate={handleNavigate}
                onToggleTheme={toggleTheme}
            />

            <SidebarMenu
                isDarkMode={isDarkMode}
                menuOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                onNavigate={handleNavigate}
                onToggleTheme={toggleTheme}
            />
        </>
    );
}

export default App;
