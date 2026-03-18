import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSteam, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faArrowUpRightFromSquare, faGamepad } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    github: faGithub,
    steam: faSteam,
    wordpress: faWordpress,
    globe: faGlobe,
    gamepad: faGamepad,
    external: faArrowUpRightFromSquare,
};

function getLinkDisplay(link) {
    const isPrimary = link.icon === "github";

    return {
        icon: iconMap[link.icon] ?? faArrowUpRightFromSquare,
        label: link.label,
        className: isPrimary
            ? "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900"
            : "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white",
    };
}

function getCollaborationMeta(project) {
    const isTeamProject = project.collaboration === "team";

    return {
        badgeLabel: isTeamProject ? "Team Project" : "Solo Project",
        description: isTeamProject ? "Built collaboratively in a team setting." : "Designed and developed independently.",
        className: isTeamProject
            ? "border-red-400 bg-neutral-950 text-red-300 shadow-lg shadow-red-950/30"
            : "border-blue-400 bg-neutral-950 text-blue-300 shadow-lg shadow-blue-950/30",
    };
}

export default function ProjectDetail({ project }) {
    if (!project) return null;
    const coverImages = Array.isArray(project.image) ? project.image : [project.image];
    const collaborationMeta = getCollaborationMeta(project);
    const hasReferences = Boolean(project.references?.length);

    return (
        <div className="relative space-y-10">
            <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Project Detail</p>
                    <span className={`inline-flex h-8 items-center justify-center rounded-full border px-4 text-[0.72rem] font-bold uppercase tracking-[0.05em] ${collaborationMeta.className}`}>
                        <span className="relative top-px leading-none">{collaborationMeta.badgeLabel}</span>
                    </span>
                </div>
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                    <div className="space-y-5">
                        <div>
                            <p className="text-sm text-neutral-400">{project.period}</p>
                            {project.course && (<p className="text-sm text-neutral-500">{project.course}</p>)}
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">{project.title}</h1>
                        </div>
                        <p className="max-w-3xl text-neutral-300">{project.sections.overview}</p>

                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link) => {
                                if (!link?.url) return null;

                                const { icon, label, className } = getLinkDisplay(link);

                                return (
                                    <a
                                        key={`${label}-${link.url}`}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={className}
                                    >
                                        <FontAwesomeIcon icon={icon} className="fa-lg" /> {label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        {coverImages.length === 1 ? (
                            <img src={coverImages[0]} alt={project.title} className="aspect-[4/3] w-full object-cover" />
                        ) : (
                            <div
                                className="grid aspect-[4/3] w-full gap-1 bg-white/5"
                                style={{ gridTemplateColumns: `repeat(${coverImages.length}, minmax(0, 1fr))` }}
                            >
                                {coverImages.map((image, index) => (
                                    <div key={`${project.slug}-cover-${index}`} className="overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`${project.title} cover ${index + 1}`}
                                            className="h-full w-full object-cover object-top"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {project.extraMedia &&
                project.extraMedia.map((media, i) => (
                    <section key={i} className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">
                            {media.title}
                        </h2>

                        {media.type === "video" && (
                            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black">
                                <video
                                    src={media.src}
                                    controls
                                    className="w-full"
                                />
                            </div>
                        )}

                        {media.type === "youtube" && (
                            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black">
                                <iframe
                                    src={media.src}
                                    title={media.title}
                                    className="aspect-video w-full"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {media.type === "image" && (
                            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black">
                                <img
                                    src={media.src}
                                    alt={media.title}
                                    className="w-full"
                                />
                            </div>
                        )}
                    </section>
                ))
            }

            <section className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-neutral-400">Role</p>
                    <p className="mt-3 text-white">{project.role}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
                    <p className="text-sm text-neutral-400">Tech Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-white">Key Contributions</h2>
                    <ul className="mt-4 space-y-3 text-neutral-300">
                        {project.sections.contributions.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-white">Challenges</h2>
                    <ul className="mt-4 space-y-3 text-neutral-300">
                        {project.sections.challenges.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">Outcome</h2>
                <p className="mt-4 text-neutral-300">{project.sections.outcome}</p>
            </section>

            {hasReferences ? (
                <section className="pt-4">
                    <div className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                        <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Reference</p>
                        </div>

                        <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
                            <p className="max-w-2xl text-sm text-neutral-400">
                                Supporting material and visual references used during the project process.
                            </p>

                            <div className="grid gap-6 lg:grid-cols-2">
                                {project.references.map((group, groupIndex) => (
                                    <div key={`${group.title}-${groupIndex}`} className="space-y-3">
                                        {group.title ? (
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-300">
                                                {group.title}
                                            </h3>
                                        ) : null}

                                        <div className="flex flex-wrap gap-3">
                                            {group.items?.map((reference) => {
                                                if (!reference?.url) return null;

                                                const { icon, label, className } = getLinkDisplay(reference);

                                                return (
                                                    <a
                                                        key={`${group.title}-${label}-${reference.url}`}
                                                        href={reference.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={className}
                                                    >
                                                        <FontAwesomeIcon icon={icon} className="fa-lg" /> {label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}
