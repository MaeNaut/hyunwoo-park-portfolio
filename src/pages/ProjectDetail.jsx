import ProjectBadge from "../components/ProjectBadge";
import ProjectBulletList from "../components/ProjectBulletList";
import ProjectCover from "../components/ProjectCover";
import ProjectLinkButton from "../components/ProjectLinkButton";

export default function ProjectDetail({ project }) {
    if (!project) return null;
    const hasReferences = Boolean(project.references?.length);

    return (
        <div className="relative space-y-10">
            <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Project Detail</p>
                    <ProjectBadge project={project} detail className="h-8 px-4 text-[0.72rem] tracking-[0.05em]" />
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
                            {project.links.map((link) => (
                                <ProjectLinkButton key={`${link.label}-${link.url}`} link={link} />
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        <ProjectCover
                            project={project}
                            imageClassName="aspect-[4/3] w-full object-cover object-top"
                            gridClassName="grid aspect-[4/3] w-full gap-1 bg-white/5"
                            imageAltLabel="cover"
                        />
                    </div>
                </div>
            </section>

            {project.extraMedia &&
                project.extraMedia.map((media, i) => (
                    <section key={i} className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">
                            {media.title}
                        </h2>

                        {/* Projects can attach different media types while using one shared layout. */}
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
                <ProjectBulletList title="Key Contributions" items={project.sections.contributions} />
                <ProjectBulletList title="Challenges" items={project.sections.challenges} />
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
                                            {group.items?.map((reference) => (
                                                <ProjectLinkButton
                                                    key={`${group.title}-${reference.label}-${reference.url}`}
                                                    link={reference}
                                                />
                                            ))}
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
