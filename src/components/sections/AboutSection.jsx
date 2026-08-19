import {useState} from 'react';

import {aboutTimeline} from '../../data/portfolioData';

export function AboutSection({currentAge}) {
    const [isPortraitHovered, setIsPortraitHovered] = useState(false);

    return (
        <section id="about-section">
            <div className="about-title">
                <h2>About Me</h2>
            </div>

            <div className="about-body">
                <div className="timeline">
                    <ul>
                        {aboutTimeline.map((item) => (
                            <li key={`${item.role}-${item.company}`} className={item.type}>
                                <div className="icon"/>
                                <div className="content">
                                    <h3>
                                        {item.role} <a href={item.companyUrl} target="_blank" rel="noreferrer">@{item.company}</a>
                                    </h3>
                                    <h5>{item.stack}</h5>
                                    <p>{item.period}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="description">
                    <div>
                        <img
                            alt="me"
                            id="me"
                            width="420"
                            src={isPortraitHovered ? '/assets/images/color/me_color.png' : '/assets/images/prl/me_prl.png'}
                            onMouseEnter={() => setIsPortraitHovered(true)}
                            onMouseLeave={() => setIsPortraitHovered(false)}
                        />
                    </div>

                    <div>
                        <p>
                            I'm a <span id="age">{currentAge}</span>-year-old guy who's obsessed with coding. It all started when I was 20 years old. I wrote the first
                            problem-solving program in my 3rd-year degree. Later it became a practice of writing small algorithms and code snippets. After the learning phase, made
                            use of what I learned. So started to develop small mobile applications like calculator, task manager, audio recorder, flashlight..,
                        </p>

                        <p>Later this became an obsession that led me to choose my profession as a software developer despite having a degree in ECE Specialization.</p>

                        <p>After joining an organization there were no limits to my learning. I learned web development along with UI designing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
