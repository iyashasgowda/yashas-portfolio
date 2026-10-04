import {useState} from 'react';

import {aboutTimeline} from '../../data/portfolioData';
import {resolveAssetPath} from '../../utils/links';

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
                            src={resolveAssetPath(isPortraitHovered ? '/assets/images/color/me_color.png' : '/assets/images/prl/me_prl.png')}
                            onMouseEnter={() => setIsPortraitHovered(true)}
                            onMouseLeave={() => setIsPortraitHovered(false)}
                        />
                    </div>

                    <div>
                        <p>
                            I'm a <span id="age">{currentAge}</span>-year-old full-stack developer and infrastructure engineer. My journey started when I was 20, writing algorithms and building mobile apps. Today, I'm focused on building <strong>high-performance, scalable backend systems</strong> that power real-world applications.
                        </p>

                        <p>Currently at <strong>Shell Recharge Solutions</strong>, I work on enterprise-scale platforms handling millions of transactions.</p>

                        <p><strong>What I build today:</strong> Distributed microservices in Java & Go, containerized with Docker, orchestrated at scale. Deep expertise in real-time systems (Kafka, Redis), database optimization (MySQL), and infrastructure automation. I design systems that are fast, reliable, and built to scale.</p>

                        <p>If you need someone to architect performant backend systems, optimize infrastructure, or lead full-stack development—<strong>you're in the right place.</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
