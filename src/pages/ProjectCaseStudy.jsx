import { Fragment, useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectBadge from "../components/ProjectBadge";
import ProjectLinkButton from "../components/ProjectLinkButton";

function JournalFigure({ figure }) {
    const frameClassName = figure.portrait
        ? "mx-auto max-w-[20rem] rounded-[1.75rem] p-2 sm:p-3"
        : "rounded-2xl p-2 sm:rounded-3xl sm:p-3";

    return (
        <figure className="space-y-4">
            <div className={`${frameClassName} border border-white/10 bg-neutral-900 shadow-2xl shadow-black/30`}>
                <img
                    src={figure.image}
                    alt={figure.alt}
                    width={figure.width}
                    height={figure.height}
                    loading={figure.priority ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={figure.priority ? "high" : "auto"}
                    className={`h-auto w-full ${figure.portrait ? "rounded-[1.25rem]" : "rounded-xl sm:rounded-2xl"}`}
                />
            </div>
            {figure.caption ? (
                <figcaption className="mx-auto max-w-3xl text-sm leading-6 text-neutral-500">
                    {figure.caption}
                </figcaption>
            ) : null}
        </figure>
    );
}

function EngineeringNote({ note }) {
    return (
        <details className="group mx-auto mt-10 max-w-3xl border-y border-emerald-300/20 bg-emerald-300/[0.035] sm:mt-12">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300/70 sm:px-6 sm:py-8 [&::-webkit-details-marker]:hidden">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
                        Under the hood
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{note.title}</h3>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="shrink-0 text-sm text-emerald-300/80 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                />
            </summary>
            <dl className="mx-1 divide-y divide-white/10 border-t border-white/10 pb-3 sm:mx-6 sm:pb-4">
                {note.entries.map((entry) => (
                    <div key={entry.label} className="grid gap-2 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6">
                        <dt className="text-sm font-semibold text-emerald-300/80">{entry.label}</dt>
                        <dd className="text-sm leading-6 text-neutral-300 sm:text-[0.95rem]">{entry.text}</dd>
                    </div>
                ))}
            </dl>
        </details>
    );
}

function JournalChapter({ chapter }) {
    return (
        <section id={chapter.id} className="scroll-mt-32 border-t border-white/10 pt-12 sm:pt-16">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {chapter.title}
                </h2>
                <div className="mt-7 space-y-5 text-base leading-8 text-neutral-300 sm:text-lg sm:leading-9">
                    {chapter.paragraphs.map((paragraph, index) => (
                        <Fragment key={paragraph}>
                            <p>{paragraph}</p>
                            {chapter.figure?.afterParagraph === index + 1 ? (
                                <div className="py-5 sm:py-7">
                                    <JournalFigure figure={chapter.figure} />
                                </div>
                            ) : null}
                        </Fragment>
                    ))}
                </div>
            </div>

            {chapter.engineeringNote ? <EngineeringNote note={chapter.engineeringNote} /> : null}

            {chapter.figure && !chapter.figure.afterParagraph ? (
                <div className="mt-10 sm:mt-12">
                    <JournalFigure figure={chapter.figure} />
                </div>
            ) : null}
        </section>
    );
}

function useActiveChapter(chapters) {
    const [activeChapterId, setActiveChapterId] = useState(null);

    useEffect(() => {
        const desktopQuery = window.matchMedia("(min-width: 1280px)");
        const sections = chapters
            .map((chapter) => document.getElementById(chapter.id))
            .filter(Boolean);
        let animationFrameId = null;

        const updateActiveChapter = () => {
            animationFrameId = null;

            if (!desktopQuery.matches) {
                setActiveChapterId(null);
                return;
            }

            const activationLine = Math.min(window.innerHeight * 0.24, 220);
            let nextActiveChapterId = null;

            for (const section of sections) {
                if (section.getBoundingClientRect().top > activationLine) {
                    break;
                }

                nextActiveChapterId = section.id;
            }

            const isAtPageEnd = Math.ceil(window.scrollY + window.innerHeight)
                >= document.documentElement.scrollHeight;

            if (isAtPageEnd && sections.length > 0) {
                nextActiveChapterId = sections.at(-1).id;
            }

            setActiveChapterId((current) => (
                current === nextActiveChapterId ? current : nextActiveChapterId
            ));
        };

        const scheduleUpdate = () => {
            if (animationFrameId === null) {
                animationFrameId = window.requestAnimationFrame(updateActiveChapter);
            }
        };

        updateActiveChapter();
        const delayedUpdateId = window.setTimeout(scheduleUpdate, 0);
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("hashchange", scheduleUpdate);
        desktopQuery.addEventListener("change", scheduleUpdate);

        return () => {
            window.clearTimeout(delayedUpdateId);

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.removeEventListener("hashchange", scheduleUpdate);
            desktopQuery.removeEventListener("change", scheduleUpdate);
        };
    }, [chapters]);

    return [activeChapterId, setActiveChapterId];
}

export default function ProjectCaseStudy({ project }) {
    const study = project.caseStudy;
    const [activeChapterId, setActiveChapterId] = useActiveChapter(study.chapters);

    return (
        <article className="space-y-20 sm:space-y-24">
            <header className="space-y-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Project Journal</p>
                    <ProjectBadge project={project} detail className="h-8 px-4 text-[0.72rem] tracking-[0.05em]" />
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-4xl space-y-5">
                        <div className="flex items-center gap-4">
                            <img src={study.mark} alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
                            <div>
                                <p className="text-sm font-medium text-neutral-200">{project.title}</p>
                                <p className="text-sm text-neutral-500">{project.period} · {project.course}</p>
                            </div>
                        </div>
                        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            {study.title}
                        </h1>
                        <p className="max-w-3xl text-xl leading-8 text-neutral-300 sm:text-2xl sm:leading-9">
                            {study.subtitle}
                        </p>
                    </div>

                    <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
                        {project.links.map((link) => (
                            <ProjectLinkButton key={`${link.label}-${link.url}`} link={link} fullWidthOnNarrow />
                        ))}
                    </div>
                </div>

                <JournalFigure figure={study.hero} />
            </header>

            <div className="grid gap-12 xl:grid-cols-[7.5rem_minmax(0,57rem)_7.5rem] xl:justify-center xl:gap-6">
                <aside className="hidden text-right xl:block">
                    <nav className="sticky top-32 ml-auto w-max border-r border-white/10 pr-3" aria-label="Project journal chapters">
                        <p className="mb-3 whitespace-nowrap pr-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">In this journal</p>
                        <div className="space-y-1.5">
                            {study.chapters.map((chapter) => {
                                const isActive = chapter.id === activeChapterId;

                                return (
                                    <a
                                        key={chapter.id}
                                        href={`#${chapter.id}`}
                                        onClick={() => setActiveChapterId(chapter.id)}
                                        aria-current={isActive ? "location" : undefined}
                                        className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm leading-5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isActive
                                            ? "bg-white text-neutral-900"
                                            : "text-neutral-300 hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        {chapter.navLabel}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>
                </aside>

                <div className="min-w-0 space-y-20 sm:space-y-24">
                    <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-neutral-300 sm:text-lg sm:leading-9">
                        {study.opening.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {study.chapters.map((chapter) => (
                        <JournalChapter key={chapter.id} chapter={chapter} />
                    ))}

                    <footer className="border-t border-white/10 pt-10">
                        <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
                            {project.links.map((link) => (
                                <ProjectLinkButton key={`journal-${link.label}-${link.url}`} link={link} fullWidthOnNarrow />
                            ))}
                        </div>
                    </footer>
                </div>

                <div className="hidden xl:block" aria-hidden="true" />
            </div>
        </article>
    );
}
