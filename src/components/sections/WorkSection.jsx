import {workItems} from '../../data/portfolioData';
import {openExternalLink, resolveAssetPath} from '../../utils/links';

export function WorkSection({isDarkMode}) {
    return (
        <section id="work-section">
            <div className="work-title">
                <h2>Work</h2>
            </div>

            <div className="work-body">
                {workItems.map((item, index) => {
                    const className = item.id === 'color-palette'
                        ? 'color-palette'
                        : item.id === 'wallpaper-sh'
                            ? 'wallpaper-sh'
                            : item.id === 'short-stories'
                                ? 'short-stories'
                                : 'musify';

                    const keyPrefix = item.id === 'color-palette'
                        ? 'cp'
                        : item.id === 'wallpaper-sh'
                            ? 'ws'
                            : item.id === 'short-stories'
                                ? 'ss'
                                : 'mf';

                    const themeVariant = isDarkMode ? 'dark' : 'light';
                    const asset = resolveAssetPath(`/assets/images/${themeVariant}/${item.avatarImage}_${themeVariant}.png`);

                    const tagPosition = index % 2 === 0 ? 'tag-right' : 'tag-left';

                    return (
                        <div key={item.id} className={className}>
                            {index % 2 === 0 ? <img alt={item.title} id={`${item.id}-image`} src={asset}/> : null}

                            <div>
                                <div className={`${keyPrefix}-holder`}>
                                    <div className={`${keyPrefix}-back`}>
                                        <article>
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                            <p>{item.detail}</p>
                                            <p>
                                                <span id={`${item.id}-link`} onClick={() => openExternalLink(item.link)}><i className="fas fa-external-link-alt"/></span>
                                                &ensp; {item.tags.join(' ')}
                                            </p>
                                        </article>

                                        <div>
                                            <ul>
                                                {item.techStack.map((tag) => (
                                                    <li key={tag}>{tag}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`${keyPrefix}-front`} id={`${item.id}-preview`}/>
                                    <div className={`${keyPrefix}-tag ${tagPosition}`}><p>{item.date}</p></div>
                                </div>
                            </div>

                            {index % 2 !== 0 ? <img alt={item.title} id={`${item.id}-image`} src={asset}/> : null}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
