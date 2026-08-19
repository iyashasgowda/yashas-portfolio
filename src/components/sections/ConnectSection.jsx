import {portfolioInfo} from '../../data/portfolioData';
import {getThemeAsset, openMailTo} from '../../utils/links';

export function ConnectSection({isDarkMode, onScrollTop}) {
    return (
        <section id="connect-section">
            <img alt="me_thankyou" id="me_thankyou" src={getThemeAsset('/assets/images/dark/me_dark.png', '/assets/images/light/me_light.png', isDarkMode)}/>

            <p>Bye for now. If you want to know more about me then</p>
            <button id="get_in_touch" type="button" onClick={() => openMailTo(portfolioInfo.email)}>Get In Touch</button>

            <h1 id="go-top" onClick={onScrollTop}><i className="fas fa-arrow-up"/></h1>
        </section>
    );
}
