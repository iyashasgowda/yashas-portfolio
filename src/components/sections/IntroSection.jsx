import {portfolioInfo} from '../../data/portfolioData';
import {getThemeAsset, openExternalLink} from '../../utils/links';

export function IntroSection({isDarkMode}) {
    return (
        <section id="main-section">
            <div>
                <div>
                    <p>Hi, my name is</p>
                    <h1>Yashas Gowda</h1>
                    <p>A software enthusiast. I design & develop web applications & native android applications.</p>
                    <button id="resume" type="button" onClick={() => openExternalLink(portfolioInfo.resume)}>
                        Resume
                    </button>
                </div>

                <img
                    alt="me"
                    id="avatar"
                    src={getThemeAsset('/assets/images/dark/avatar_black.png', '/assets/images/light/avatar_white.png', isDarkMode)}
                />
            </div>
        </section>
    );
}
