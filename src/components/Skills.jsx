import { useState } from "react";

const skills = [
    "React", "Node.js", "Version Control", "Restful APIs", "Typescript", "Docker", "MySQL", "MongoDB", "C++", "PostgreSQL",
    "Redis", "TailwindCSS", "Figma", "Linux", "PHP"
];

const SkillTag = ({ skill }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: hovered ? '#fff' : 'rgba(255,255,255,0.12)',
                background: hovered
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
                    : 'transparent',
                border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid transparent',
                padding: '0.5rem 1.2rem',
                borderRadius: '999px',
                cursor: 'default',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                transition: 'color 0.3s ease, background 0.3s ease, border 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                transform: hovered ? 'translateY(-3px) scale(1.04)' : 'none',
                boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: hovered ? '#f128b8ff' : 'rgba(255,255,255,0.15)',
                display: 'inline-block',
                flexShrink: 0,
                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hovered ? '0 0 10px 2px rgba(243, 83, 214, 0.7)' : 'none',
            }} />
            {skill}
        </span>
    );
};

const Row = ({ items, direction = "left", speed = 30 }) => {
    const duplicated = [...items, ...items, ...items, ...items];
    const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";

    return (
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
            <div
                style={{
                    display: 'inline-flex',
                    gap: '0.5rem',
                    animation: `${animName} ${speed}s linear infinite`,
                    willChange: 'transform',
                    padding: '0.5rem 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
                onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
            >
                {duplicated.map((skill, i) => (
                    <SkillTag key={`${skill}-${i}`} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const row1 = skills.slice(0, 8);
    const row2 = skills.slice(5, 13);
    const row3 = skills.slice(2, 10);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap');

                @keyframes marqueeLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                @keyframes marqueeRight {
                    0%   { transform: translateX(-25%); }
                    100% { transform: translateX(0); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .skills-section {
                    position: relative;
                    padding: 8rem 0 7rem;
                    background: #080808;
                    overflow: hidden;
                    border-top: 1px solid rgba(255,255,255,0.04);
                }

                .skills-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse 70% 50% at 20% 0%, rgba(74,222,128,0.03) 0%, transparent 60%),
                        radial-gradient(ellipse 60% 40% at 80% 100%, rgba(99,102,241,0.04) 0%, transparent 60%);
                    pointer-events: none;
                }

                .skills-section::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
                    opacity: 0.018;
                    pointer-events: none;
                }

                .skills-header {
                    padding: 0 2.5rem 4rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    text-align: center;
                }

                .skills-header-left {
                    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .skills-label {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.80rem;
                    letter-spacing: 0.28em;
                    text-transform: uppercase;
                    color: #fc35baff; /* Fuchsia 400 */
                    margin: 0 0 1rem;
                }

                .skills-title {
                    font-family: 'Syne', sans-serif;
                    font-weight: 800;
                    font-size: clamp(3rem, 7vw, 5.5rem);
                    color: #fff;
                    line-height: 0.88;
                    letter-spacing: -0.04em;
                    margin: 0;
                }

                .skills-title em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 1.5px #c084fc; /* Purple 400 */
                }

                .skills-meta {
                    animation: fadeUp 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both;
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Center meta items */
                    gap: 0.4rem;
                    padding-bottom: 0.25rem;
                }

                .skills-count {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.80rem;
                    color: #94a3b8; /* Slate 400 */
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .skills-dot-row {
                    display: flex;
                    gap: 5px;
                }

                .skills-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #475569; /* Slate 600 */
                }

                .skills-dot.active {
                    background: #e879f9; /* Fuchsia 400 */
                    box-shadow: 0 0 6px rgba(232, 121, 249, 0.7);
                }

                .rows-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .row-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%);
                    margin: 0.6rem 2.5rem;
                }

                .edge-fade {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg,
                        #080808 0%,
                        transparent 9%,
                        transparent 91%,
                        #080808 100%
                    );
                    pointer-events: none;
                    z-index: 10;
                }
            `}</style>

            <section id="skills" className="skills-section">
                <div className="edge-fade" />

                <div className="skills-header">
                    <div className="skills-header-left">
                        <p className="skills-label">// Technologies</p>
                        <h2 className="skills-title">
                            my<br /><em>stack</em>
                        </h2>
                    </div>

                    <div className="skills-meta">
                        <div className="skills-dot-row">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className={`skills-dot${i === 0 ? ' active' : ''}`} />
                            ))}
                        </div>
                        <div className="skills-count">{skills.length} skills mastered</div>
                    </div>
                </div>

                <div className="rows-wrapper">
                    <Row items={row1} direction="left" speed={40} />
                    <div className="row-divider" />
                    <Row items={row2} direction="right" speed={32} />
                    <div className="row-divider" />
                    <Row items={row3} direction="left" speed={48} />
                </div>
            </section>
        </>
    );
};

export default Skills;