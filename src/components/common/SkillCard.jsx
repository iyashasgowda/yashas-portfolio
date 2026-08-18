export function SkillCard({id, label, value, meta, icon, onHover, hovered}) {
    return (
        <article
            key={id}
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => onHover(null)}
        >
            <img alt={label} id={id} src={icon}/>
            {value ? (
                <div>
                    <h1>{value}</h1>
                    <p>{meta}</p>
                </div>
            ) : (
                <p>{label}</p>
            )}
        </article>
    );
}
