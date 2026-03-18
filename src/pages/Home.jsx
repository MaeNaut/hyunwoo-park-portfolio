import { Link } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay, faVolumeHigh, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import englishPronunciation from "../assets/profile/hyunwoo-english-pronunciation.mp3";
import koreanPronunciation from "../assets/profile/hyunwoo-korean-pronunciation.mp3";

export default function Home({ profile, projects }) {
    const featuredProjects = projects.filter((p) => p.featured);
    const englishAudioRef = useRef(null);
    const koreanAudioRef = useRef(null);

    const playAudio = (audioRef) => {
        if (!audioRef.current) {
            audioRef.current = new Audio(audioRef === englishAudioRef ? englishPronunciation : koreanPronunciation);
        }

        audioRef.current.currentTime = 0;
        void audioRef.current.play();
    };

    const renderProjectCover = (project) => {
        const images = Array.isArray(project.image) ? project.image : [project.image];

        if (images.length === 1) {
            return (
                <img
                    src={images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            );
        }

        return (
            <div
                className="grid h-full w-full gap-1 bg-white/5"
                style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
            >
                {images.map((image, index) => (
                    <div key={`${project.slug}-${index}`} className="overflow-hidden">
                        <img
                            src={image}
                            alt={`${project.title} preview ${index + 1}`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        );
    };

    const getProjectBadge = (project) => {
        const isTeamProject = project.collaboration === "team";

        return {
            label: isTeamProject ? "Team" : "Solo",
            className: isTeamProject
                ? "border-red-400 bg-neutral-950 text-red-300 shadow-lg shadow-red-950/45"
                : "border-blue-400 bg-neutral-950 text-blue-300 shadow-lg shadow-blue-950/45",
        };
    };

    return (
        <div className="space-y-24">
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                    <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-neutral-300">
                        Available for co-op / internship roles
                    </p>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-end gap-3">
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {profile.name}
                            </h1>

                            <div className="group relative">
                                <button
                                    type="button"
                                    className="mb-1.5 ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white text-sm text-neutral-950 transition hover:border-white hover:bg-neutral-100"
                                    aria-label="Show pronunciation guide"
                                >
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                </button>

                                <div className="pointer-events-none absolute left-0 top-full z-10 w-[20rem] pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
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
                        <p className="text-xl text-neutral-200">{profile.title}</p>
                        <p className="max-w-2xl text-neutral-300">{profile.bio}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="fa-lg" /> LinkedIn
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white"
                        >
                            <FontAwesomeIcon icon={faGithub} className="fa-lg" /> GitHub
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg" /> Contact
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                        <img src={profile.heroImage} alt="Portrait placeholder" className="h-[480px] w-full object-cover" />
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

                                <p className="max-w-2xl text-neutral-200">{school.program}</p>

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
                <div className="grid gap-6 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/projects/${project.slug}`}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20"
                        >
                            <span className={`absolute right-4 top-4 z-10 inline-flex h-7 min-w-[3.9rem] items-center justify-center rounded-full border px-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] ${getProjectBadge(project).className}`}>
                                <span className="relative top-px leading-none">{getProjectBadge(project).label}</span>
                            </span>
                            <div className="aspect-[16/10] overflow-hidden">
                                {renderProjectCover(project)}
                            </div>
                            <div className="space-y-4 p-6">
                                <div>
                                    <p className="text-sm text-neutral-400">{project.period}</p>
                                    {project.course && (<p className="text-xs text-neutral-500">{project.course}</p>)}
                                    <h3 className="mt-2 min-h-[3.5rem] text-xl font-semibold text-white">{project.title}</h3>
                                </div>
                                <p className="text-sm leading-6 text-neutral-300">{project.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
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
                                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
