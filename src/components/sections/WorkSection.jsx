import {workItems} from '../../data/portfolioData';

export function WorkSection() {
    return (
        <section id="work-section">
            <div className="work-title">
                <h2>Work</h2>
            </div>

            <div className="work-body">
                {workItems.map((item) => (
                    <div key={item.id} className="work-item-card">
                        <div className="work-card-image-wrapper" style={{backgroundColor: item.bgColor}}>
                            <div className="work-card-image">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} />
                                ) : (
                                    <div className="image-placeholder">
                                        <span>{item.title}</span>
                                    </div>
                                )}
                            </div>
                            <div className="work-card-overlay">
                                <span className="work-period">{item.date}</span>
                            </div>
                        </div>
                        
                        <div className="work-card-content">
                            <h3>{item.title}</h3>
                            <p className="work-description">{item.description}</p>
                            
                            {item.highlights && (
                                <div className="work-highlights">
                                    {item.highlights.map((highlight) => (
                                        <span key={highlight} className="highlight">{highlight}</span>
                                    ))}
                                </div>
                            )}
                            
                            <div className="work-tech-stack">
                                {item.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            {item.playStoreUrl && (
                                <a href={item.playStoreUrl} target="_blank" rel="noopener noreferrer" className="play-store-link">
                                    View on Google Play →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
