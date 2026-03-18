import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import generalResumePdf from "../assets/resumes/Hyunwoo_Park_Resume.pdf";

export default function Resume({ profile }) {
    const resumeLastUpdated = "March 16, 2026";

    return (
        <div className="space-y-8">
            <SectionTitle
                eyebrow="Resume"
                title="Resume and supporting links"
                body="A quick access point for my resume, professional profiles, and contact details."
            />

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <h3 className="text-2xl font-semibold text-white">Resume</h3>

                    <div className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
                        <div className="mx-auto max-w-[18.5rem] rounded-[1.25rem] bg-white px-5 py-6 text-neutral-900 shadow-2xl shadow-black/25">
                            <div>
                                <p className="text-[1.3rem] font-bold leading-none text-neutral-950">{profile.name}</p>
                                <div className="mt-2.5 space-y-1.5">
                                    <div className="h-1.5 w-30 rounded-full bg-neutral-300" />
                                    <div className="h-1.5 w-24 rounded-full bg-neutral-300" />
                                </div>
                            </div>

                            <div className="mt-4 space-y-2.5 text-[0.56rem] leading-[1.35] text-neutral-800">
                                <div>
                                    <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                                        <p className="font-bold uppercase tracking-[0.08em]">Objective</p>
                                    </div>
                                    <div className="mt-1.5 space-y-1.5">
                                        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
                                        <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                                    </div>
                                </div>

                                <div>
                                    <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                                        <p className="font-bold uppercase tracking-[0.08em]">Education</p>
                                    </div>
                                    <div className="mt-1.5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1.5">
                                                <div className="h-1.5 w-28 rounded-full bg-neutral-700" />
                                                <div className="h-1.5 w-20 rounded-full bg-neutral-200" />
                                            </div>
                                            <div className="h-1.5 w-16 shrink-0 rounded-full bg-neutral-300" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                                        <p className="font-bold uppercase tracking-[0.08em]">Skills</p>
                                    </div>
                                    <div className="mt-1.5 space-y-1.5">
                                        <div className="h-1.5 w-1/2 rounded-full bg-neutral-200" />
                                        <div className="h-1.5 w-2/3 rounded-full bg-neutral-200" />
                                    </div>
                                </div>

                                <div>
                                    <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                                        <p className="font-bold uppercase tracking-[0.08em]">Project</p>
                                    </div>
                                    <div className="mt-1.5 space-y-1.5">
                                        <div>
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="h-1.5 w-32 rounded-full bg-neutral-700" />
                                                <div className="h-1.5 w-16 shrink-0 rounded-full bg-neutral-300" />
                                            </div>
                                            <div className="mt-1.5 space-y-1">
                                                <div className="h-1.5 w-full rounded-full bg-neutral-200" />
                                                <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="border-b-[1.5px] border-neutral-900 pb-0.5">
                                        <p className="font-bold uppercase tracking-[0.08em]">Work Experience</p>
                                    </div>
                                    <div className="mt-1.5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1.5">
                                                <div className="h-1.5 w-24 rounded-full bg-neutral-700" />
                                            </div>
                                            <div className="h-1.5 w-16 shrink-0 rounded-full bg-neutral-300" />
                                        </div>
                                        <div className="mt-1.5 space-y-1">
                                            <div className="h-1.5 w-full rounded-full bg-neutral-200" />
                                            <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={generalResumePdf}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-lg" />
                                Open Resume
                            </a>

                            <a
                                href={generalResumePdf}
                                download
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white"
                            >
                                <FontAwesomeIcon icon={faDownload} className="fa-lg" />
                                Download PDF
                            </a>
                        </div>

                        <p className="text-sm text-neutral-500">
                            Last updated: {resumeLastUpdated}
                        </p>
                    </div>
                </div>

                <div className="self-start rounded-3xl border border-white/10 bg-white/5 p-8">
                    <h3 className="text-2xl font-semibold text-white">External Links</h3>
                    <div className="mt-6 space-y-4 text-neutral-300">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 hover:bg-white/5"
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faGithub} className="fa-lg" />
                                GitHub
                            </span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-lg" />
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 hover:bg-white/5"
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
                                LinkedIn
                            </span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-lg" />
                        </a>

                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 hover:bg-white/5"
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                                Email
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
