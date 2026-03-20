import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay, faVolumeHigh, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import ProjectBadge from "../components/ProjectBadge";
import ProjectCover from "../components/ProjectCover";
import { saveScrollPosition } from "../utils/scrollMemory";
import englishPronunciation from "../assets/profile/hyunwoo-english-pronunciation.mp3";
import koreanPronunciation from "../assets/profile/hyunwoo-korean-pronunciation.mp3";

export default function Home({ profile, projects }) {
    const featuredProjects = projects.filter((p) => p.featured);
    const [primaryFeaturedProject, ...secondaryFeaturedProjects] = featuredProjects;
    const englishAudioRef = useRef(null);
    const koreanAudioRef = useRef(null);
    const pronunciationRef = useRef(null);
    const [isPronunciationOpen, setIsPronunciationOpen] = useState(false);
    const location = useLocation();

    const playAudio = (audioRef) => {
        // Create each audio object only when the user asks for it.
        if (!audioRef.current) {
            audioRef.current = new Audio(audioRef === englishAudioRef ? englishPronunciation : koreanPronunciation);
        }

        audioRef.current.currentTime = 0;
        void audioRef.current.play();
    };

    useEffect(() => {
        if (!isPronunciationOpen) {
            return;
        }

        const handlePointerDown = (event) => {
            if (window.innerWidth < 640) {
                return;
            }

            if (!pronunciationRef.current?.contains(event.target)) {
                setIsPronunciationOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("touchstart", handlePointerDown);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("touchstart", handlePointerDown);
        };
    }, [isPronunciationOpen]);

    const renderFeaturedCard = (project, className = "") => (
        <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            state={{ fromPath: location.pathname }}
            onClick={() => saveScrollPosition(location.pathname)}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20 ${className}`}
        >
            <ProjectBadge project={project} className="absolute right-4 top-4 z-10" />
            <div className="aspect-[16/10] overflow-hidden">
                <ProjectCover project={project} hoverScale />
            </div>
            <div className="space-y-4 p-6">
                <div>
                    <p className="text-sm text-neutral-400">{project.period}</p>
                    {project.course && (<p className="text-xs text-neutral-500">{project.course}</p>)}
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-sm leading-6 text-neutral-300">{project.summary}</p>
            </div>
        </Link>
    );

    return (
        <div className="space-y-24">
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                    <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-300 sm:text-sm">
                        Available for full-time co-op / internship roles
                    </p>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {profile.name}
                            </h1>

                            <div ref={pronunciationRef} className="group relative">
                                <button
                                    type="button"
                                    onClick={() => setIsPronunciationOpen((current) => !current)}
                                    className="ml-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white text-xs text-neutral-950 transition hover:border-white hover:bg-neutral-100 sm:h-8 sm:w-8 sm:text-sm"
                                    aria-label="Show pronunciation guide"
                                    aria-expanded={isPronunciationOpen}
                                >
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                </button>

                                <div
                                    className={`absolute left-0 top-full z-40 hidden w-[20rem] pt-3 transition duration-200 sm:block ${isPronunciationOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"}`}
                                >
                                    <div className="rounded-2xl border border-white/10 bg-neutral-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                                            Pronunciation Guide
                                        </p>
                                        <div className="mt-4 space-y-4">
                                            <button
                                                type="button"
                                                onClick={() => playAudio(englishAudioRef)}
                                                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
                                            >
                                                <span>English pronunciation</span>
                                                <FontAwesomeIcon icon={faCirclePlay} className="fa-lg" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => playAudio(koreanAudioRef)}
                                                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
                                            >
                                                <span>Korean pronunciation</span>
                                                <FontAwesomeIcon icon={faCirclePlay} className="fa-lg" />
                                            </button>

                                            <div className="space-y-2 text-sm leading-6 text-neutral-300">
                                                <p><span className="font-semibold text-white">hyun</span> - 'yun' is pronounced as 'ean' in Sean or ocean</p>
                                                <p><span className="font-semibold text-white">woo</span> - 'w' is silent and pronounced as 'do' or 'too' without "d" or "t" respectively</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-200 sm:text-xl">{profile.title}</p>
                        <p className="max-w-2xl text-neutral-300">{profile.bio}</p>
                    </div>

                    <div className="grid gap-3 sm:flex sm:flex-wrap">
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 sm:w-auto"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="fa-lg" /> LinkedIn
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white sm:w-auto"
                        >
                            <FontAwesomeIcon icon={faGithub} className="fa-lg" /> GitHub
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white sm:w-auto"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg" /> Contact
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                        <img src={profile.heroImage} alt="Portrait placeholder" className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[480px]" />
                    </div>
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                    <SectionTitle eyebrow="About" title="A little about me." />
                </div>
                <div className="space-y-4 text-neutral-300">
                    {profile.about.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <SectionTitle
                    eyebrow="Education"
                    title="Where I studied"
                    body="My background in game development and computer science."
                />

                <div className="space-y-2">
                    {profile.education.map((school, index) => (
                        <article
                            key={school.school}
                            className={`grid gap-5 py-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 ${index !== 0 ? "border-t border-white/10" : ""}`}
                        >
                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-semibold tracking-tight text-white">{school.school}</h3>
                                    <p className="text-sm text-neutral-400">{school.location}</p>
                                </div>

                                <p className="max-w-2xl text-sm text-neutral-200 sm:text-base">{school.program}</p>

                                {school.highlights?.length ? (
                                    <div className="space-y-1 text-sm text-neutral-400">
                                        {school.highlights.map((item) => (
                                            <p key={item}>{item}</p>
                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex flex-wrap items-start gap-3 lg:justify-end">
                                <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                                    {school.period}
                                </div>
                                <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                                    GPA: {school.gpa}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <SectionTitle
                    eyebrow="Projects"
                    title="Featured work"
                />
                {primaryFeaturedProject ? (
                    <div className="space-y-6 lg:space-y-8">
                        <Link
                            to={`/projects/${primaryFeaturedProject.slug}`}
                            state={{ fromPath: location.pathname }}
                            onClick={() => saveScrollPosition(location.pathname)}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch"
                        >
                            <ProjectBadge project={primaryFeaturedProject} className="absolute right-4 top-4 z-10" />
                            <div className="aspect-[16/10] overflow-hidden lg:h-full lg:min-h-[21rem] lg:aspect-auto">
                                <ProjectCover
                                    project={primaryFeaturedProject}
                                    hoverScale
                                    imageClassName="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="space-y-4 p-6 lg:flex lg:flex-col lg:justify-between lg:p-8">
                                <div>
                                    <p className="text-sm text-neutral-400">{primaryFeaturedProject.period}</p>
                                    {primaryFeaturedProject.course && (
                                        <p className="text-xs text-neutral-500">{primaryFeaturedProject.course}</p>
                                    )}
                                    <h3 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">
                                        {primaryFeaturedProject.title}
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-sm leading-6 text-neutral-300 lg:text-base">
                                    {primaryFeaturedProject.summary}
                                </p>
                                <div className="space-y-4 border-t border-white/10 pt-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Role</p>
                                        <p className="mt-2 text-sm text-neutral-200 lg:text-base">
                                            {primaryFeaturedProject.role}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2">
                                            {primaryFeaturedProject.stack.slice(0, 4).map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {secondaryFeaturedProjects.map((project) => renderFeaturedCard(project))}
                        </div>
                    </div>
                ) : null}
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <SectionTitle
                        eyebrow="Skills"
                        title="Technical skills"
                        body="A mix of languages, engines, tools, and systems I use across my projects."
                    />
                </div>
                <div className="space-y-6">
                    {profile.skills.map(({ category, items }) => (
                        <div key={category} className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 sm:px-4 sm:py-2 sm:text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 transition duration-200 sm:hidden ${isPronunciationOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setIsPronunciationOpen(false)}
            >
                <div
                    className="w-full max-w-sm rounded-3xl border border-white/10 bg-neutral-950 p-5 shadow-2xl shadow-black/50"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                                Pronunciation Guide
                            </p>
                            <p className="mt-2 text-sm text-neutral-300">
                                Tap a button to hear the name.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsPronunciationOpen(false)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-neutral-200"
                            aria-label="Close pronunciation guide"
                        >
                            ×
                        </button>
                    </div>

                    <div className="mt-5 space-y-4">
                        <button
                            type="button"
                            onClick={() => playAudio(englishAudioRef)}
                            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
                        >
                            <span>English pronunciation</span>
                            <FontAwesomeIcon icon={faCirclePlay} className="fa-lg" />
                        </button>

                        <button
                            type="button"
                            onClick={() => playAudio(koreanAudioRef)}
                            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
                        >
                            <span>Korean pronunciation</span>
                            <FontAwesomeIcon icon={faCirclePlay} className="fa-lg" />
                        </button>

                        <div className="space-y-2 text-sm leading-6 text-neutral-300">
                            <p><span className="font-semibold text-white">hyun</span> - 'yun' is pronounced as 'ean' in Sean or ocean</p>
                            <p><span className="font-semibold text-white">woo</span> - 'w' is silent and pronounced as 'do' or 'too' without "d" or "t" respectively</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
